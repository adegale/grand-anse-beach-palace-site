import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#2B59C3]">
              Grand Beach Palace
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('rooms')} className="text-gray-700 hover:text-[#2B59C3] transition-colors">
              Rooms
            </button>
            <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-[#2B59C3] transition-colors">
              Our Story
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-[#2B59C3] transition-colors">
              Amenities
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#2B59C3] transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#2B59C3] transition-colors">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-[#F56416] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#29BF12] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('rooms')} className="block w-full text-left py-2 text-gray-700 hover:text-[#2B59C3]">
              Rooms
            </button>
            <button onClick={() => scrollToSection('story')} className="block w-full text-left py-2 text-gray-700 hover:text-[#2B59C3]">
              Our Story
            </button>
            <button onClick={() => scrollToSection('amenities')} className="block w-full text-left py-2 text-gray-700 hover:text-[#2B59C3]">
              Amenities
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-700 hover:text-[#2B59C3]">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-[#2B59C3]">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full bg-[#F56416] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#29BF12] transition-all"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
