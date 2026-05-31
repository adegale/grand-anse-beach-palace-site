import { DollarSign, Users, Sunset, MapPin } from 'lucide-react';


const perks = [
  {
    icon: DollarSign,
    title: 'Best Available Rates',
    description: 'No middleman fees - book direct and save',
    color: 'from-[#F56416] to-[#29BF12]'
  },
  {
    icon: Users,
    title: 'Direct Family Service',
    description: 'Personalized attention and local knowledge from the owners',
    color: 'from-[#2B59C3] to-[#29BF12]'
  },
  {
    icon: Sunset,
    title: 'Front-Row Sunsets',
    description: 'Steps from Grenada\'s most photographed sunset views',
    color: 'from-[#FFD166] to-[#F56416]'
  },
  {
    icon: MapPin,
    title: 'Local Insider Tips',
    description: 'Authentic recommendations for restaurants, beaches, and hidden gems',
    color: 'from-[#29BF12] to-[#2B59C3]'
  }
];

const amenities = [
  {
    image: 'https://adegale.github.io/Anichi_Website/air_conditioning.png',
    title: 'Air Conditioning',
    description: 'Cool, comfortable rooms',
  },
  {
    image: 'https://adegale.github.io/Anichi_Website/beachfront.png',
    title: 'Beachfront Location',
    description: 'Steps from Grand Anse Beach',
  },
  {
    image: 'https://adegale.github.io/Anichi_Website/breakfast.png',
    title: 'Coming Soon: Restaurant',
    description: 'Authentic Caribbean cuisine',
  },
  {
    image: 'https://adegale.github.io/Anichi_Website/location.png',
    title: 'Coming Soon: Botanical Garden',
    description: 'Peaceful walking paths',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="section-textured py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F56416] text-white px-6 py-2 rounded-full font-semibold mb-4">
            WHY BOOK DIRECT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Direct & <span className="text-[#29BF12]">Make a Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you book directly through our website, you're getting the best available rate. Direct bookings allow us to invest more in the guest experience, maintain our spaces with care, and offer you personalized service from the moment you reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#FFD166]"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${perk.color} p-4 mb-4 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                <perk.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-600 leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Offer <span className="text-[#F56416]">(&amp; What&apos;s Coming)</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img src={amenity.image} alt={amenity.title} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{amenity.title}</h4>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
