import { useEffect, useRef, useState } from "react";
import { BsArrowRight, BsVolumeMuteFill, BsVolumeUpFill } from "react-icons/bs";
import "./Hero.css";
import heroVideo from "./assets/video/event-hero.mp4";
import heroPoster from "./assets/hero/ethnile-group.jpg.jpg";

export default function Hero({ setPage }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefersReducedMotion(media.matches);

    onChange();
    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    video.play().catch(() => {});
  }, [muted, prefersReducedMotion]);

  const toggleSound = () => {
    setMuted(prev => !prev);
  };

  return (
    <section className="hero-video-wrap">
      {prefersReducedMotion ? (
        <div
          className="hero-static-bg"
          style={{ backgroundImage: `url(${heroPoster})` }}
          aria-hidden="true"
        />
      ) : (
        <video
          ref={videoRef}
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero-video-bg"
        />
      )}

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

      {!prefersReducedMotion && (
        <button
          className="hero-sound-toggle"
          onClick={toggleSound}
          aria-label={muted ? "Unmute hero video" : "Mute hero video"}
          aria-pressed={!muted}
          title={muted ? "Unmute" : "Mute"}
          type="button"
        >
          {muted ? <BsVolumeMuteFill size={20} /> : <BsVolumeUpFill size={20} />}
          <span className="sr-only">{muted ? "Unmute" : "Mute"}</span>
        </button>
      )}
    </section>
  );
}
