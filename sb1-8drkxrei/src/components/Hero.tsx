import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          Your Caribbean Sanctuary
          <span className="block text-golden-pollen mt-2">On Grand Anse Beach</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
          A family-run boutique hotel where authentic Caribbean warmth meets beachfront tranquility in Grenada
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToBooking}
            className="className="bg-blaze-orange text-white px-10 py-4 rounded-full text-lg font-bold hover:opacity-90"
          >
            Book Your Stay
          </button>
          <button
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border-2 border-white/50"
          >
            Discover Our Story
          </button>
        </div>

        <div className="mt-12 inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
          <span className="text-[#FFD166] font-semibold">Direct Booking Perks:</span>
          <span className="text-sm">Free Breakfast • Beach Gear • Airport Shuttle</span>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer z-10"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
