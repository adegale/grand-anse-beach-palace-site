import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFD166]">Grand Beach Palace</h3>
            <p className="text-gray-400 leading-relaxed">
              Your family-run boutique escape on Grand Anse Beach, where authentic Caribbean hospitality meets beachfront tranquility.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD166] transition-colors">
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD166] transition-colors">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD166] transition-colors">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#FFD166] transition-colors">
                  Guest Reviews
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#29BF12] flex-shrink-0 mt-1" />
                <span>Grand Anse Beach, St. George's, Grenada</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-[#29BF12] flex-shrink-0 mt-1" />
                <span>+1 (473) 444-4444</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-[#29BF12] flex-shrink-0 mt-1" />
                <span>info@grandbeachpalace.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Our Journey</h4>
            <p className="text-gray-400 mb-4">Stay connected for exclusive offers and island updates</p>
            <div className="flex space-x-3">
              <a href="#" className="bg-[#2B59C3] p-3 rounded-full hover:bg-[#29BF12] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-[#F56416] p-3 rounded-full hover:bg-[#29BF12] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Grand Beach Palace Hotel. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#F56416] fill-[#F56416]" />
              <span>in Grenada</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
