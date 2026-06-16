import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const headerBg = scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = scrolled ? 'text-palace-navy' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + brand */}
        <a
          href="#hero"
          className="flex items-center gap-3"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <img
            src={`${import.meta.env.BASE_URL}media/Logo.png`}
            alt="Grand Anse Beach Palace"
            className="w-9 h-9 object-contain"
          />
          <span
            className={`font-medium text-lg leading-tight tracking-wide transition-colors duration-300 ${textColor}`}
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Grand Anse Beach Palace
          </span>
        </a>

        {/* Desktop nav */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide`}>
          {[
            { label: 'Rooms', id: 'rooms' },
            { label: 'Our Story', id: 'story' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`bg-transparent border-0 cursor-pointer transition-colors duration-200 hover:text-palace-gold ${textColor}`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('send-message')}
            className="bg-palace-navy text-palace-gold px-6 py-2.5 text-sm font-semibold tracking-widest uppercase hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200"
          >
            Book Direct
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden transition-colors duration-200 hover:text-palace-gold ${textColor}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          {[
            { label: 'Rooms', id: 'rooms' },
            { label: 'Our Story', id: 'story' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left px-6 py-3 text-palace-navy font-medium border-b border-gray-50 hover:bg-gray-50 hover:text-palace-gold transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <div className="px-6 py-4">
            <button
              onClick={() => scrollTo('send-message')}
              className="w-full bg-palace-navy text-palace-gold py-3 text-sm font-semibold tracking-widest uppercase hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200"
            >
              Book Direct
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
