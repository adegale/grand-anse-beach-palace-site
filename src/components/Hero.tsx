export default function Hero() {
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
    <section className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Hero Content — brand and tagline only */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl tracking-tight">
          <span className="hidden md:inline">Grand Anse </span>Beach Palace
        </h1>

        <span className="block text-[#FFD166] text-2xl md:text-4xl lg:text-5xl font-light italic drop-shadow-lg">
          Come relax...
        </span>
      </div>
    </section>
  );
}

