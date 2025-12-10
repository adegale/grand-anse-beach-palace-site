import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  // Separate state for each text element
  const [showHeading, setShowHeading] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  // Reference to access the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // TIMING CONFIGURATION
    // Text appears 0.5 seconds after video starts
    const headingFadeInTime = 0.5; // "Grand Anse Beach Palace" appears at 0.5s
    const subtitleFadeInTime = 2.0; // "Come relax..." appears at 2s
    const buttonFadeInTime = 3.5; // Button appears at 3.5s
    
    // How long should everything stay visible?
    const displayDuration = 14; // Visible for 14 seconds (plenty of time)
    
    // When should everything disappear?
    const fadeOutTime = headingFadeInTime + displayDuration; // Disappear at 14.5s

    // This function runs constantly while video plays
    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      
      // Show heading first
      if (currentTime >= headingFadeInTime && !showHeading && currentTime < fadeOutTime) {
        setShowHeading(true);
      }
      
      // Show subtitle second
      if (currentTime >= subtitleFadeInTime && !showSubtitle && currentTime < fadeOutTime) {
        setShowSubtitle(true);
      }
      
      // Show button last
      if (currentTime >= buttonFadeInTime && !showButton && currentTime < fadeOutTime) {
        setShowButton(true);
      }
      
      // Hide everything before loop restarts
      if (currentTime >= fadeOutTime || currentTime < headingFadeInTime) {
        if (showHeading) setShowHeading(false);
        if (showSubtitle) setShowSubtitle(false);
        if (showButton) setShowButton(false);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    
    // Cleanup
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [showHeading, showSubtitle, showButton]);

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

      {/* Hero Content - Staggered Fade-in */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        
        {/* Heading - Fades in first at 0.5s */}
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight hero-text-animation ${showHeading ? 'hero-text-visible' : 'hero-text-hidden'}`}>
          <span className="hidden md:inline">Grand Anse Beach Palace</span>
        </h1>

        {/* Subtitle - Fades in second at 2s */}
        <span className={`block text-[#FFD166] mt-4 text-2xl md:text-4xl lg:text-5xl font-light italic hero-text-animation ${showSubtitle ? 'hero-text-visible' : 'hero-text-hidden'}`}>
          Come relax...
        </span>

        {/* Button - Fades in last at 3.5s */}
        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-8 mt-8 hero-text-animation ${showButton ? 'hero-text-visible' : 'hero-text-hidden'}`}>
          <button
            onClick={scrollToBooking}
            className="button button-primary text-lg py-4 px-10 shadow-2xl bg-gradient-to-r from-[#FF6B35] hover:from-[#FF8555]"
          >
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  );
}