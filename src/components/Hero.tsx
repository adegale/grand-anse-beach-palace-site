import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
     className="absolute inset-0 w-full h-full object-cover object-center" 
      >
        {/* FIX: Changed to lowercase 'hero.mp4' to match your folder */}
       <source src={`${import.meta.env.BASE_URL}media/hero-mobile.mp4`} type="video/mp4" media="(max-width: 768px)" />
<source src={`${import.meta.env.BASE_URL}media/hero.mp4`} type="video/mp4" /> 
        </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
       <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in leading-tight drop-shadow-2xl tracking-tight">
  <span className="hidden md:inline">Grand Anse </span>Beach Palace
</h1>
        
 <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-10">       

         <button
  onClick={scrollToBooking}
  className="button button-primary text-lg py-4 px-8 shadow-2xl">

  Book Your Stay
<button
  onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
  className="button button-secondary"
></button>
            Discover Our Story
          </button>
        </div>
        
        <div className="button button-secondary">
          {/* FIX: Used 'text-golden-pollen' brand color */}
         <p className="text-xl text-[#FFD166] font-light">
  <span className="font-semibold">Direct Booking Perks: </span>Reduced Rate
</p> 
        </div>
      </div>
      
      <button
        onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to rooms section"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}