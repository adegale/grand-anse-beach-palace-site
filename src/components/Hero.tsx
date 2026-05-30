import { useState, useRef } from 'react';

export default function Hero() {
    const [showText, setShowText] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const showTextRef = useRef(false);

  const isMobile =
        typeof window !== 'undefined' &&
        window.matchMedia('(max-width: 768px)').matches;

  const videoSrc = isMobile
      ? `${import.meta.env.BASE_URL}media/hero-mobile.mp4`
        : `${import.meta.env.BASE_URL}media/Hero.mp4`;

  const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video || !video.duration) return;

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
        
          {/* Hero text - always visible */}
              <div className="relative z-10 text-center px-4 w-full">
                      <span
                                  className={`block text-[#FFD166] text-6xl md:text-8xl lg:text-9xl font-light italic drop-shadow-2xl
                                              transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}
                                >
                                Come relax...
                      </span>span>
                      <p className="block text-white text-lg md:text-2xl lg:text-3xl font-light mt-6 drop-shadow-lg tracking-wide">
                                Grand Anse Beach Palace &mdash; family-run, fully appointed, unforgettable.
                      </p>p>
              </div>div>
        </section>section>
      );
}</section>
