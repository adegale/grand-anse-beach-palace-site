import { Wifi, Tv, Wind, Coffee, Waves, User } from 'lucide-react';

const rooms = [
  { // Apartment, 1 Bedroom, Ocean View
    id: 1,
    name: 'Ocean View Apartment (1 Bed)',
    description: 'Spacious apartment featuring a separate bedroom, fully equipped kitchenette, and a private balcony overlooking the ocean. Perfect for extended stays.',
    // 🔴 FIX: Added 'media/' (Capital R) and removed '../'
    image: 'media/13.jpg', 
    capacity: '2 guests',
    features: ['Ocean View', 'Full Kitchenette', 'King Bed', 'Balcony Access']
  },
  { // Apartment, 1 Bedroom, Garden View
    id: 2,
    name: 'Garden View Apartment (1 Bed)',
    description: 'Enjoy the lush tropical gardens from this serene apartment. Ideal for relaxation with a separate living area and comfortable queen bed.',
    // 🔴 FIX: Added 'media/'
    image: 'media/14.jpg', 
    capacity: '2 guests',
    features: ['Garden View', 'Quiet Zone', 'Queen Bed', 'Separate Living Area']
  },
  { // Standard Room, Ocean View
    id: 3,
    name: 'Standard Ocean View Room',
    description: 'Spacious room featuring a comfortable king bed and a private balcony overlooking the ocean. Perfect for couples.',
    // 🔴 FIX: Added 'media/'
    image: 'media/15.jpg', 
    capacity: '2 guests',
    features: ['Ocean View', 'Full Kitchenette', 'King Bed', 'Private Balcony']
  },
  { // Standard Room, Mountain View - without balcony
    id: 4,
    name: 'Standard Garden View Room',
    description: 'Enjoy the lush tropical gardens from this serene room. Ideal for relaxation with a comfortable queen bed.',
    // 🔴 FIX: Added 'media/'
    image: 'media/16.jpg',
    capacity: '2 guests',
    features: ['Garden View', 'Quiet Zone', 'Queen Bed', 'Separate Living Area']
  },
  { // 2 Bedroom Apartment, Ocean View
    id: 5,
    name: 'Ocean View Apartment (2 Bed)',
    description: 'Spacious two-bedroom apartment featuring fully equipped kitchenette and a private balcony overlooking the ocean. Perfect for families.',
    // 🔴 FIX: Added 'media/'
    image: 'media/17.jpg',
    capacity: '4 guests',
    features: ['Ocean View', 'Full Kitchenette', 'King Bed', 'Private Balcony']
  },
  { // 3 Bedroom Apartment Ocean View
    id: 6,
    name: 'Ocean View Apartment (3 Bed)',
    description: 'Luxurious three-bedroom apartment with stunning ocean views. Perfect for large families or groups seeking space and comfort.',
    // 🔴 FIX: Added 'media/'
    image: 'media/18.jpg',
    capacity: '2-6 guests',
    features: ['Ocean View', 'Full Kitchen', 'Multiple Bedrooms', 'Large Living Area']
  },
  { // 4 Bedroom Apartment, Ocean View
    id: 7,
    name: 'Ocean View Apartment (4 Bed)',
    description: 'Premium four-bedroom apartment featuring a fully equipped kitchen and private balcony overlooking the ocean. Ideal for large groups.',
    // 🔴 FIX: Added 'media/'
    image: 'media/19.jpg', 
    capacity: '2-8 guests',
    features: ['Ocean View', 'Full Kitchen', 'Multiple Bathrooms', 'Private Balcony']
  },
  { // 5 Bedroom Apartment, Ocean View
    id: 8,
    name: 'Ocean View Penthouse (5 Bed)',
    description: 'Spectacular five-bedroom penthouse with panoramic ocean views. The ultimate luxury for large families or groups.',
    // 🔴 FIX: Added 'media/'
    image: 'media/20.jpg',
    capacity: '2-10 guests',
    features: ['Panoramic Ocean View', 'Full Kitchen', 'Multiple Living Areas', 'Premium Amenities']
  }
];

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Coffee, label: 'Coffee Maker' },
  { icon: Waves, label: 'Beach Access' },
  { icon: User, label: 'Concierge' }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Perfect <span className="text-laser-blue">Caribbean</span> Escape
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Spacious, comfortable rooms designed for rest and rejuvenation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-golden-pollen text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  {room.capacity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-laser-blue/10 text-laser-blue px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blaze-orange text-white py-3 rounded-full font-semibold hover:bg-bright-fern transition-colors duration-300">
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">All Rooms Include</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="bg-laser-blue/10 p-4 rounded-full mb-3 group-hover:bg-bright-fern/20 transition-colors">
                  <amenity.icon className="w-8 h-8 text-laser-blue group-hover:text-bright-fern transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}