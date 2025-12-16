import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textTimeoutRef = useRef<number | null>(null);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    return () => {
      if (textTimeoutRef.current) {
        clearTimeout(textTimeoutRef.current);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    setShowText(true);

    textTimeoutRef.current = window.setTimeout(() => {
      setShowText(false);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }, 500);
    }, 5000);
  };

  return (
    <section className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-contain object-center"
      >
        <source src={`${import.meta.env.BASE_URL}media/hero-mobile.mp4`} type="video/mp4" media="(max-width: 768px)" />
        <source src={`${import.meta.env.BASE_URL}media/hero.mp4`} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>

      {/* Hero Content - Fades in after video ends */}
      <div
        className={`relative z-10 text-center text-white px-4 max-w-5xl mx-auto transition-opacity duration-1000 ${
          showText ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
          <span className="hidden md:inline">Grand Anse </span>Beach Palace
        </h1>

        <span className="block text-[#FFD166] mt-4 text-2xl md:text-4xl lg:text-5xl font-light italic drop-shadow-lg">
          Come relax...
        </span>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-10 mt-8">
          <button
            onClick={scrollToBooking}
            className="button button-primary text-lg py-4 px-10 shadow-2xl bg-gradient-to-r from-[#F56416] to-[#FF8A3D] text-white font-semibold"
          >
            Book Your Stay
          </button>

          <button
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="button button-secondary text-lg py-4 px-10 shadow-2xl bg-white/95 backdrop-blur-sm text-gray-900 font-semibold"
          >
            Discover Our Story
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to rooms section"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}

