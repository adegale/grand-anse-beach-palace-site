import { useState, useRef } from 'react';

export default function Hero() {
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Use a ref to track the current visible state inside the timeupdate handler
  // so we avoid stale-closure issues without adding it to useCallback deps.
  const showTextRef = useRef(false);

  // Pick the appropriate video source at render time.
  // The <source media=""> attribute is not reliably honoured by browsers for
  // <video> elements, so we resolve the correct file in JavaScript instead.
  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

  const videoSrc = isMobile
    ? `${import.meta.env.BASE_URL}media/hero-mobile.mp4`
    : `${import.meta.env.BASE_URL}media/Hero.mp4`;

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // Show text during the last 5 seconds of each loop; hide it otherwise
    // (including when the video restarts at currentTime ≈ 0).
    const shouldShow = (video.duration - video.currentTime) <= 5;

    if (shouldShow !== showTextRef.current) {
      showTextRef.current = shouldShow;
      setShowText(shouldShow);
    }
  };

  return (
    <section className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={`${import.meta.env.BASE_URL}media/hero.jpg`}
        src={videoSrc}
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* 'Come relax...' fades in for the last 5 seconds of each loop */}
      <div className="relative z-10 text-center px-4 w-full">
        <span
          className={`block text-[#FFD166] text-6xl md:text-8xl lg:text-9xl font-light italic drop-shadow-2xl
            transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}
        >
          Come relax...
        </span>
      </div>
    </section>
  );
}

