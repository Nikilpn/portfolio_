import { useEffect, useRef, useState } from "react";

import { FaVolumeUp, FaPause } from "react-icons/fa";

import "./ListenButton.css";

function ListenButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <>
      <button
        className={`listen-float ${isPlaying ? "playing" : ""}`}
        onClick={toggleAudio}
        aria-label="Listen to voiceover"
        title={isPlaying ? "Pause voiceover" : "Listen to me"}
      >
        {isPlaying ? <FaPause /> : <FaVolumeUp />}

        <span className="listen-ring" />
        <span className="listen-ring ring-2" />
      </button>

      <audio
        ref={audioRef}
        src="/audio/voiceover.mp3"
        onEnded={handleAudioEnd}
        preload="auto"
      />
    </>
  );
}

export default ListenButton;
