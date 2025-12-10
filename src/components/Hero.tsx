import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  // Single state to control ALL text visibility
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      
      // Show text between 15 and 19 seconds (last 4 seconds of video)
      if (currentTime >= 15 && currentTime < 19) {
        if (!showText) setShowText(true);
      } else {
        if (showText) setShowText(false);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [showText]);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src={`${import.meta.env.BASE_URL}media/hero-mobile.mp4`} type="video/mp4" media="(max-width: 768px)" />
        <source src={`${import.meta.env.BASE_URL}media/hero.mp4`} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>

      {/* Hero Content - ALL fades in together at end */}
      <div className={`relative z-10 text-center text-white px-4 max-w-5xl mx-auto transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
          <span className="hidden md:inline">Grand Anse Beach Palace</span>
        </h1>

        {/* Subtitle */}
        <span className="block text-[#FFD166] mt-4 text-2xl md:text-4xl lg:text-5xl font-light italic">
          Come relax...
        </span>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8 mt-8">
          <button
            onClick={scrollToBooking}
            className="button button-primary text-lg py-4 px-10 shadow-2xl bg-gradient-to-r from-[#FF6B35] hover:from-[#FF8555]"
          >
            Book Your Stay
          </button>
          
          <button
            onClick={() => {
              const storySection = document.getElementById('story');
              if (storySection) {
                storySection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="button button-secondary text-lg py-4 px-10 shadow-2xl"
          >
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}