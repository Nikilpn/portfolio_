import { useEffect, useRef } from "react";

import "./ParticleWave.css";

function ParticleWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let rafId = null;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // 3D point grid
    const cols = 34;
    const rows = 20;
    const spacing = 26;
    let points = [];

    // Wave parameters
    let time = 0;

    const buildPoints = () => {
      points = [];
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          points.push({
            ox: (j - cols / 2) * spacing,
            oy: (i - rows / 2) * spacing,
            baseZ: Math.sin((i * 0.9) + (j * 0.55)) * 30,
            phase: i * 0.6 + j * 0.4
          });
        }
      }
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildPoints();
    };

    const project = (x, y, z, rotX, rotY) => {
      // Rotate Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;

      // Rotate X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      let y1 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;

      const fov = 520;
      const scale = fov / (fov + z2);
      return {
        sx: width / 2 + x1 * scale,
        sy: height / 2 + y1 * scale,
        scale,
        depth: z2
      };
    };

    const drawLine = (a, b) => {
      const dist = Math.hypot(a.proj.sx - b.proj.sx, a.proj.sy - b.proj.sy);
      if (dist > 90) return;

      const avgScale = (a.proj.scale + b.proj.scale) / 2;
      const alpha = Math.max(0.05, Math.min(0.5, avgScale * 0.9 - 0.15));

      ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(a.proj.sx, a.proj.sy);
      ctx.lineTo(b.proj.sx, b.proj.sy);
      ctx.stroke();
    };

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };

    const handleTouch = (e) => {
      if (e.touches.length) {
        const rect = canvas.getBoundingClientRect();
        mouseX = ((e.touches[0].clientX - rect.left) / width - 0.5) * 2;
        mouseY = ((e.touches[0].clientY - rect.top) / height - 0.5) * 2;
      }
    };

    const drawWithMouse = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.006;

      const rotY = Math.sin(time * 0.35) * 0.55 + mouseX * 0.25;
      const rotX = Math.cos(time * 0.28) * 0.35 + 0.35 + mouseY * 0.2;

      const projected = points.map((p) => {
        const wave =
          Math.sin(time * 2.2 + p.phase) * 34 +
          Math.cos(time * 1.4 + p.phase * 1.3) * 16 +
          p.baseZ;
        return {
          ...p,
          proj: project(p.ox, p.oy, wave, rotX, rotY)
        };
      });

      ctx.lineWidth = 1;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const idx = i * cols + j;
          const a = projected[idx];
          if (j + 1 < cols) drawLine(a, projected[i * cols + j + 1]);
          if (i + 1 < rows) drawLine(a, projected[(i + 1) * cols + j]);
        }
      }

      for (const p of projected) {
        const { sx, sy, scale } = p.proj;
        const alpha = Math.max(0.15, Math.min(1, scale * 1.4));
        const size = 1.6 * scale;
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, size * 4);
        grad.addColorStop(0, `rgba(56, 189, 248, ${0.9 * alpha})`);
        grad.addColorStop(0.4, `rgba(99, 102, 241, ${0.4 * alpha})`);
        grad.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sx, sy, size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(drawWithMouse);
    };

    const onMouseMove = (e) => handleMouse(e);
    const onTouchMove = (e) => handleTouch(e);

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    rafId = requestAnimationFrame(drawWithMouse);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-wave-canvas" />;
}

export default ParticleWave;
