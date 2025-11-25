import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO + BRAND */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}media/logo.png`}
            alt="Grand Anse Beach Palace"
            className="w-10 h-10 object-contain"
          />
          <span className="font-semibold text-lg">Grand Anse Beach Palace</span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <a href="#rooms" className="hover:text-bright-fern">Rooms</a>
          <a href="#story" className="hover:text-bright-fern">Our Story</a>
          <a href="#contact" className="hover:text-bright-fern">Contact</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE NAV MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {['rooms', 'story', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block px-4 py-2 border-b hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
