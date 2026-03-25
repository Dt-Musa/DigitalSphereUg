import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./Hero.css";
import heroVideo from "./assets/video/envent.mp4.mp4";

export default function Hero({ setPage }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    video.play().catch(() => {});
  }, [muted]);

  const toggleSound = () => {
    setMuted(prev => !prev);
  };

  return (
    <section className="hero-video-wrap">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="hero-video-bg"
      />

      <div className="hero-video-overlay" />

      <div className="hero-video-content">
        <div className="hero-chip">Uganda's Student Blockchain Community</div>
        <h1>
          Uganda's Home for <span>Blockchain & Web3</span>
        </h1>
        <p>
          Free education, local events, and real opportunities built by Ugandan
          students for every learner ready to grow in Web3.
        </p>

        <div className="hero-actions">
          <button onClick={() => setPage("Learn")}>
            Explore Free Tracks <BsArrowRight />
          </button>
          <button className="ghost" onClick={() => setPage("Community")}>Join Community</button>
        </div>
      </div>

      <button
        className="hero-sound-toggle"
        onClick={toggleSound}
        aria-label={muted ? "Unmute hero video" : "Mute hero video"}
        title={muted ? "Unmute" : "Mute"}
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </section>
  );
}
