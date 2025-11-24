import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/media/Logo.png" 
            alt="Grand Beach Palace" 
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('rooms')}
            className="text-gray-700 hover:text-laser-blue font-medium transition-colors"
          >
            Rooms
          </button>
          <button
            onClick={() => scrollToSection('story')}
            className="text-gray-700 hover:text-laser-blue font-medium transition-colors"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToSection('amenities')}
            className="text-gray-700 hover:text-laser-blue font-medium transition-colors"
          >
            Amenities
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-700 hover:text-laser-blue font-medium transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-laser-blue font-medium transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('booking')}
            className="bg-blaze-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-[#29BF12] transition-colors"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('rooms')}
              className="text-gray-700 hover:text-laser-blue font-medium transition-colors text-left"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-gray-700 hover:text-laser-blue font-medium transition-colors text-left"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="text-gray-700 hover:text-laser-blue font-medium transition-colors text-left"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-laser-blue font-medium transition-colors text-left"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-laser-blue font-medium transition-colors text-left"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-blaze-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-[#29BF12] transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}