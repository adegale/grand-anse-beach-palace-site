import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-palace-navy text-white">

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <a
            href="#hero"
            className="flex items-center gap-3 mb-4"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img
              src={`${import.meta.env.BASE_URL}media/Logo.png`}
              alt="Grand Anse Beach Palace"
              className="w-10 h-10 object-contain"
            />
            <span
              className="text-lg font-medium text-white leading-tight"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Grand Anse Beach Palace Hotel
            </span>
          </a>
          <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            A family-run retreat on Grenada's most iconic shoreline.
            Spacious rooms, warm service, and the rhythm of the Caribbean —
            right outside your window.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-[0.2em] text-palace-gold mb-5"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Contact
          </h3>
          <ul className="space-y-3 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-palace-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <span className="text-white/60">Grand Anse Beach, St. George&apos;s, Grenada</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-palace-gold flex-shrink-0" strokeWidth={1.5} />
              <a href="tel:+14734391412" className="text-white/60 hover:text-palace-gold transition-colors duration-200">
                +1 (473) 439-1412
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-palace-gold flex-shrink-0" strokeWidth={1.5} />
              <a href="mailto:grandansepalace@gmail.com" className="text-white/60 hover:text-palace-gold transition-colors duration-200">
                grandansepalace@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Book Direct CTA */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-[0.2em] text-palace-gold mb-5"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Book Direct &amp; Save
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Booking directly helps us care for the property, create meaningful local jobs,
            and offer you our best rates.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('send-message')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block border border-palace-gold text-palace-gold px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Contact Us
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center">
        <p className="text-xs text-white/30" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          &copy; {new Date().getFullYear()} Grand Anse Beach Palace Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
