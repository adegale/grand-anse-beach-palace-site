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
        {/* Logo / Brand */}
        <a href="#hero" className="font-semibold text-lg">
          Grand Anse Beach Palace
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <a href="#rooms" className="hover:text-blue-600">Rooms</a>
          <a href="#story" className="hover:text-blue-600">Our Story</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Mobile Button */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#rooms" className="block px-4 py-2 border-b">Rooms</a>
          <a href="#story" className="block px-4 py-2 border-b">Our Story</a>
          <a href="#contact" className="block px-4 py-2">Contact</a>
        </div>
      )}
    </header>
  );
}
