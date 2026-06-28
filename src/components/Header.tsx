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
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo only */}
        <a
          href="#hero"
          className="flex items-center"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <img
            src={`${import.meta.env.BASE_URL}media/Logo.png`}
            alt="Grand Anse Beach Palace"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {[
            { label: 'Rooms', id: 'rooms' },
            { label: 'Our Story', id: 'story' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`bg-transparent border-0 cursor-pointer transition-colors duration-200 hover:text-palace-gold ${textColor}