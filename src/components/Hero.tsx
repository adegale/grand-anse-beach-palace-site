import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* FIX: Changed to lowercase 'hero.mp4' to match your folder */}
        <source src={`${import.meta.env.BASE_URL}media/hero.mp4`} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          Grand Anse Beach Palace
          {/* FIX: Used 'text-golden-pollen' brand color */}
          <span className="block text-golden-pollen mt-3 text-3xl md:text-4xl lg:text-5xl font-light italic">Come relax…</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
         <button
  onClick={scrollToBooking}
  className="button button-primary"
>
  Book Your Stay
</button> 
          <button
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="button button-primary"
          >
            Discover Our Story
          </button>
        </div>
        
        <div className="button button-secondary">
          {/* FIX: Used 'text-golden-pollen' brand color */}
          <span className="text-golden-pollen font-semibold text-sm md:text-base">Direct Booking Perks:</span>
          <span className="text-xs md:text-sm">Reduced Rate</span>
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