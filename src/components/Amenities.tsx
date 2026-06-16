import { DollarSign, Users, Sunset, MapPin, Wind, Waves, UtensilsCrossed, TreePine } from 'lucide-react';

const perks = [
  {
    icon: DollarSign,
    title: 'Best Available Rates',
    description: 'No middleman fees — book direct and save.',
  },
  {
    icon: Users,
    title: 'Direct Family Service',
    description: 'Personalized attention and local knowledge from the owners.',
  },
  {
    icon: Sunset,
    title: 'Front-Row Sunsets',
    description: 'Steps from Grenada\'s most photographed sunset views.',
  },
  {
    icon: MapPin,
    title: 'Local Insider Tips',
    description: 'Authentic recommendations for restaurants, beaches, and hidden gems.',
  },
];

const amenities = [
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Cool, comfortable rooms',
  },
  {
    icon: Waves,
    title: 'Beachfront Location',
    description: 'Steps from Grand Anse Beach',
  },
  {
    icon: UtensilsCrossed,
    title: 'Coming Soon: Restaurant',
    description: 'Authentic Caribbean cuisine',
  },
  {
    icon: TreePine,
    title: 'Coming Soon: Botanical Garden',
    description: 'Peaceful walking paths',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="section-rule" />
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase text-palace-navy/50 mb-3"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Why Book Direct
          </p>
          <h2 className="text-palace-navy mb-4">Book Direct &amp; Make a Difference</h2>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            When you book directly through our website, you're getting the best available rate. Direct bookings allow us to invest more in the guest experience, maintain our spaces with care, and offer you personalized service from the moment you reach out.
          </p>
        </div>

        {/* Perk cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 hover:border-palace-gold transition-colors duration-300 p-7"
            >
              <div className="w-12 h-12 border border-palace-navy/20 flex items-center justify-center mb-5">
                <perk.icon className="w-5 h-5 text-palace-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-palace-navy mb-2" style={{ fontSize: '1rem', fontWeight: 600 }}>
                {perk.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {perk.description}
              </p>
            </div>
          ))}
        </div>

        {/* Amenities grid */}
        <div className="border-t border-gray-200 pt-16">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-10 text-center"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            What We Offer &amp; What's Coming
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 hover:border-palace-gold transition-colors duration-300 p-6 text-center"
              >
                <amenity.icon className="w-7 h-7 text-palace-navy mx-auto mb-4" strokeWidth={1.5} />
                <h4
                  className="font-semibold text-palace-navy mb-1 text-sm"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {amenity.title}
                </h4>
                <p className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
