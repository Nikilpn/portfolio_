const RENDER_SCALE = 2;
const PAGE_GAP = 24;

export const isPdf = (cert) => cert.image.toLowerCase().endsWith(".pdf");

const baseName = (cert) => cert.image.split("/").pop().replace(/\.[^.]+$/, "");

const extensionOf = (cert) => cert.image.split(".").pop().toLowerCase();

const triggerDownload = (url, name, revoke = false) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  if (revoke) setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load ${src}`));
    img.src = src;
  });

const renderPdfToJpeg = async (src) => {
  const pdfjs = await import("pdfjs-dist");
  const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
  pdfjs.GlobalWorkerOptions.workerSrc = worker.default;

  const loadingTask = pdfjs.getDocument({ url: src });
  const doc = await loadingTask.promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber++) {
    const page = await doc.getPage(pageNumber);
    const viewport = page.getViewport({ scale: RENDER_SCALE });
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    await page.render({ canvas, viewport }).promise;
    pages.push(canvas);
  }

  const width = Math.max(...pages.map((canvas) => canvas.width));
  const height =
    pages.reduce((sum, canvas) => sum + canvas.height, 0) +
    PAGE_GAP * (pages.length - 1);

  const sheet = document.createElement("canvas");
  sheet.width = width;
  sheet.height = height;

  const ctx = sheet.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  let y = 0;
  pages.forEach((canvas) => {
    ctx.drawImage(canvas, 0, y);
    y += canvas.height + PAGE_GAP;
  });

  await loadingTask.destroy();

  return new Promise((resolve) => sheet.toBlob(resolve, "image/jpeg", 0.92));
};

export const downloadCertificatePdf = async (cert) => {
  if (isPdf(cert)) {
    triggerDownload(cert.image, `${baseName(cert)}.pdf`);
    return;
  }

  const { default: jsPDF } = await import("jspdf");
  const img = await loadImage(cert.image);
  const width = img.naturalWidth;
  const height = img.naturalHeight;

  const pdf = new jsPDF({
    orientation: width > height ? "landscape" : "portrait",
    unit: "px",
    format: [width, height],
  });

  pdf.addImage(img, extensionOf(cert) === "png" ? "PNG" : "JPEG", 0, 0, width, height);
  pdf.save(`${baseName(cert)}.pdf`);
};

export const downloadCertificateJpeg = async (cert) => {
  if (!isPdf(cert)) {
    triggerDownload(cert.image, `${baseName(cert)}.${extensionOf(cert)}`);
    return;
  }

  const blob = await renderPdfToJpeg(cert.image);
  const url = URL.createObjectURL(blob);
  triggerDownload(url, `${baseName(cert)}.jpg`, true);
};
