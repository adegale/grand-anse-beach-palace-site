import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C55] text-white mt-20">
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* BRAND / LOGO */}
        <div>
          <a href="#hero" className="flex items-center gap-2 mb-3">
            <img
              src={`${import.meta.env.BASE_URL}media/logo.png`}
              alt="Grand Anse Beach Palace"
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-xl font-semibold tracking-wide">
              Grand Anse Beach Palace Hotel
            </h2>
          </a>
          <p className="text-sm text-slate-300 leading-relaxed">
            A family-run retreat on Grenada’s most iconic shoreline.
            Spacious rooms, warm service, and the rhythm of the Caribbean—
            right outside your window.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#FFCD72]">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#EE5622]" />
              <span>Grand Anse Beach, St. George&apos;s, Grenada</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#EE5622]" />
              <span>+1 (473) XXX-XXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#EE5622]" />
              <span>info@grandansebeachpalace.com</span>
            </li>
          </ul>
        </div>

        {/* BOOK DIRECT CTA */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#FFCD72]">
            Book Direct & Save
          </h3>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Booking directly helps us care for the property, create meaningful local jobs,
            and offer our best rates—without platform fees.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-[#EE5622] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#FFCD72] transition-colors"
          >
            Contact Us
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Grand Anse Beach Palace Hotel. All rights reserved.
      </div>
    </footer>
  );
}
