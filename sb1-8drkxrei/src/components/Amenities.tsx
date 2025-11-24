import { Utensils, Car, Umbrella, Dumbbell, Sparkles, Plane, Gift, UtensilsCrossed } from 'lucide-react';

const perks = [
  {
    icon: Utensils,
    title: 'Complimentary Breakfast',
    description: 'Start your day with a delicious Caribbean-inspired breakfast on us',
    color: 'from-[#F56416] to-[#29BF12]'
  },
  {
    icon: Umbrella,
    title: 'Free Beach Gear',
    description: 'Beach chairs, umbrellas, and towels provided for your comfort',
    color: 'from-[#2B59C3] to-[#29BF12]'
  },
  {
    icon: Plane,
    title: 'Airport Shuttle',
    description: 'Complimentary round-trip airport transfers for direct bookings',
    color: 'from-[#FFD166] to-[#F56416]'
  },
  {
    icon: Gift,
    title: 'Welcome Package',
    description: 'Local treats and island guide to help you explore like a local',
    color: 'from-[#29BF12] to-[#2B59C3]'
  }
];

const amenities = [
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'Stay active with our well-equipped gym'
  },
  {
    icon: UtensilsCrossed,
    title: 'On-site Restaurant',
    description: 'Authentic Grenadian and international cuisine'
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure parking for all guests'
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description: 'Immaculate rooms maintained daily'
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F56416] text-white px-6 py-2 rounded-full font-semibold mb-4">
            EXCLUSIVE DIRECT BOOKING PERKS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Direct & Get <span className="text-[#29BF12]">More Value</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enjoy these complimentary benefits when you book directly with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#FFD166]"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${perk.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <perk.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-600 leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Premium Amenities & Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-white rounded-xl p-6 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="bg-[#2B59C3]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#29BF12]/20 transition-colors">
                    <amenity.icon className="w-7 h-7 text-[#2B59C3] group-hover:text-[#29BF12] transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{amenity.title}</h4>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#29BF12] via-[#2B59C3] to-[#F56416] rounded-2xl p-1">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Experience the Grand Beach Palace Difference
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every detail is designed to make your Caribbean escape effortless and memorable. From the moment you arrive to the moment you leave, you'll feel the warmth of authentic Grenadian hospitality.
            </p>
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F56416] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#29BF12] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Reserve Your Stay Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
