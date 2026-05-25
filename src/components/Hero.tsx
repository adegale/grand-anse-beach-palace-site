export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pick the appropriate video source at render time.
  // The <source media=""> attribute is not reliably honoured by browsers for
  // <video> elements, so we resolve the correct file in JavaScript instead.
  const isMobile =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 768px)').matches;

  const videoSrc = isMobile
    ? `${import.meta.env.BASE_URL}media/hero-mobile.mp4`
    : `${import.meta.env.BASE_URL}media/Hero.mp4`;

  return (
    <section className="relative h-[60vh] md:h-screen flex items-end md:items-center justify-center overflow-hidden pt-20 md:pt-32 pb-8 md:pb-0">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={`${import.meta.env.BASE_URL}media/hero.jpg`}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay — stronger gradient at bottom so bottom-anchored content stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl tracking-tight">
          <span className="hidden md:inline">Grand Anse </span>Beach Palace
        </h1>

        <span className="block text-[#FFD166] text-2xl md:text-4xl lg:text-5xl font-light italic drop-shadow-lg">
          Come relax...
        </span>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center items-center mt-5 md:mt-8">
          {/* Primary CTA — same on all breakpoints, compact on mobile */}
          <button
            onClick={scrollToBooking}
            className="button button-primary w-full sm:w-auto text-base md:text-lg py-2.5 md:py-4 px-6 md:px-10 shadow-xl bg-gradient-to-r from-[#F56416] to-[#FF8A3D] text-white font-semibold"
          >
            Book Your Stay
          </button>

          {/* Secondary CTA — ghost/outline on mobile, solid white on desktop */}
          <button
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="button button-secondary w-full sm:w-auto text-base md:text-lg py-2.5 md:py-4 px-6 md:px-10 border-2 border-white text-white bg-transparent md:border-0 md:bg-white/95 md:backdrop-blur-sm md:text-gray-900 font-semibold"
          >
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}

