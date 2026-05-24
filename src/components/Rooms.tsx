import {Wifi, AirVent, Monitor, Coffee, Waves, UserRound } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;
const rooms = [
  { // Deluxe Ocean View — 1 Bedroom Apartment
    id: 1,
    name: 'Deluxe Ocean View',
    description: 'Spacious apartment featuring a private balcony overlooking the ocean, a fully equipped kitchenette, and a comfortable king bed. Perfect for couples or extended stays seeking the best of ocean living.',
    image: `${BASE_URL}media/rooms/13.jpg`,
    capacity: '2 guests',
    features: ['Ocean View', 'Private Balcony', 'King Bed', 'Full Kitchenette']
  },
  { // Penthouse Ocean View — 5 Bedrooms
    id: 8,
    name: 'Penthouse Ocean View',
    description: 'Our most spectacular accommodation — a five-bedroom penthouse with panoramic ocean views, a full kitchen, multiple living areas, and premium finishes throughout. The ultimate choice for large groups or a memorable celebration.',
    image: `${BASE_URL}media/rooms/19.jpg`,
    capacity: '2-10 guests',
    features: ['Panoramic Ocean View', 'Full Kitchen', '5 Bedrooms', 'Multiple Living Areas', 'Premium Amenities']
  },
  { // Standard Ocean View — Room to 4-Bed Apartment
    id: 3,
    name: 'Standard Ocean View',
    description: 'Our versatile ocean view category spans comfortable rooms and spacious multi-bedroom apartments — all featuring private balconies, ocean views, and fully equipped kitchens. Available in configurations sleeping 2 to 8 guests.',
    image: `${BASE_URL}media/rooms/15.jpg`,
    capacity: '2-8 guests',
    features: ['Ocean View', 'Private Balcony', 'King Bed', 'Full Kitchenette', 'Flexible Configurations']
  },
  { // Garden View — Room or 1-Bed Apartment
    id: 2,
    name: 'Garden View',
    description: 'Serene and lush, our Garden View accommodations overlook the hotel\'s tropical gardens. Enjoy a peaceful retreat with a comfortable queen bed, a separate living area, and the gentle sounds of nature.',
    image: `${BASE_URL}media/rooms/14.jpg`,
    capacity: '2 guests',
    features: ['Garden View', 'Quiet Zone', 'Queen Bed', 'Separate Living Area']
  },
];
const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: AirVent, label: 'Air Conditioning' },
  { icon: Monitor, label: 'Smart TV' },
  { icon: Coffee, label: 'Coffee Maker' },
  { icon: Waves, label: 'Beach Access' },
  { icon: UserRound, label: 'Concierge' }
];



export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Pure <span className="accent-caribbean">Caribbean</span> Escape
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Spacious, comfortable rooms designed for rest and rejuvenation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 px-4 md:px-0">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="card room-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
              <img
  src={room.image}
  alt={room.name}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
  loading="lazy"
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
                <button className="w-full bg-gradient-to-r from-[#F56416] to-[#FF8A3D] text-white py-3 rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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