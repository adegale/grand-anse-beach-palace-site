import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand / intro */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide">
            Grand Anse Beach Palace Hotel
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            A family-run boutique hotel on Grenada&apos;s iconic Grand Anse Beach.
            Spacious rooms, warm service, and the sound of the Caribbean right outside
            your door.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Grand Anse Beach, St. George&apos;s, Grenada</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (xxx) xxx-xxxx</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@grandansebeachpalace.com</span>
            </li>
          </ul>
        </div>

        {/* Small note / CTA */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Book Direct
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            When you book directly with us, more of your stay goes into caring for the
            property, our team, and your experience.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Grand Anse Beach Palace Hotel. All rights
        reserved.
      </div>
    </footer>
  );
}
