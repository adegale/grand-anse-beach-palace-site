import React, { useState } from 'react';
import {Wifi, AirVent, Monitor, Coffee, Waves, UserRound } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;
const rooms = [
  { // Deluxe Ocean View — 1 Bedroom Apartment
    id: 1,
    name: 'Deluxe Ocean View',
    description: 'Spacious apartment featuring a private balcony overlooking the ocean, a fully equipped kitchenette, and a comfortable king bed. Perfect for couples or extended stays seeking the best of ocean living.',
    gallery: [
      `${BASE_URL}media/rooms/deluxe-ocean-view/01-hero.jpg`,
      `${BASE_URL}media/rooms/deluxe-ocean-view/02-bedroom.jpg`,
      `${BASE_URL}media/rooms/deluxe-ocean-view/03-kitchen.jpg`,
      `${BASE_URL}media/rooms/deluxe-ocean-view/04-bathroom.jpg`,
      `${BASE_URL}media/rooms/deluxe-ocean-view/05-balcony-lower.jpg`,
      `${BASE_URL}media/rooms/deluxe-ocean-view/06-bedroom-alt.jpg`,
    ],
    image: `${BASE_URL}media/rooms/deluxe-ocean-view/01-hero.jpg`,
    capacity: '2 guests',
    features: ['Ocean View', 'Private Balcony', 'King Bed', 'Full Kitchenette']
  },
  { // Penthouse Ocean View — 5 Bedrooms
    id: 8,
    name: 'Penthouse Ocean View',
    description: 'Our most spectacular accommodation — a five-bedroom penthouse with panoramic ocean views, a full kitchen, multiple living areas, and premium finishes throughout. The ultimate choice for large groups or a memorable celebration.',
    gallery: [
      `${BASE_URL}media/rooms/penthouse-ocean-view/01-hero.jpg`,
      `${BASE_URL}media/rooms/penthouse-ocean-view/02-kitchen.jpg`,
      `${BASE_URL}media/rooms/penthouse-ocean-view/03-balcony-detail.jpg`,
      `${BASE_URL}media/rooms/penthouse-ocean-view/04-bedroom-a.jpg`,
      `${BASE_URL}media/rooms/penthouse-ocean-view/05-bedroom-b.jpg`,
      `${BASE_URL}media/rooms/penthouse-ocean-view/06-garden-view.jpg`,
    ],
    image: `${BASE_URL}media/rooms/penthouse-ocean-view/01-hero.jpg`,
    capacity: '2-10 guests',
    features: ['Panoramic Ocean View', 'Full Kitchen', '5 Bedrooms', 'Multiple Living Areas', 'Premium Amenities']
  },
  { // Standard Ocean View — Room to 4-Bed Apartment
    id: 3,
    name: 'Standard Ocean View',
    description: 'Our versatile ocean view category spans comfortable rooms and spacious multi-bedroom apartments — all featuring private balconies, ocean views, and fully equipped kitchens. Available in configurations sleeping 2 to 8 guests.',
    gallery: [
      `${BASE_URL}media/rooms/standard-ocean-view/01-hero.jpg`,
      `${BASE_URL}media/rooms/standard-ocean-view/02-balcony-detail.jpg`,
      `${BASE_URL}media/rooms/standard-ocean-view/03-dining-area.jpg`,
      `${BASE_URL}media/rooms/standard-ocean-view/04-kitchen.jpg`,
      `${BASE_URL}media/rooms/standard-ocean-view/05-bedroom.jpg`,
      `${BASE_URL}media/rooms/standard-ocean-view/06-exterior-terrace.jpg`,
      `${BASE_URL}media/rooms/standard-ocean-view/07-balcony-entrance.jpg`,
      `${BASE_URL}media/rooms/standard-ocean-view/08-interior-kitchenette.jpg`,
      `${BASE_URL}media/rooms/standard-ocean-view/09-bathroom.jpg`,
    ],
    image: `${BASE_URL}media/rooms/standard-ocean-view/01-hero.jpg`,
    capacity: '2-8 guests',
    features: ['Ocean View', 'Private Balcony', 'King Bed', 'Full Kitchenette', 'Flexible Configurations']
  },
  { // Garden View — Room or 1-Bed Apartment
    id: 2,
    name: 'Garden View',
    description: 'Serene and lush, our Garden View accommodations overlook the hotel\'s tropical gardens. Enjoy a peaceful retreat with a comfortable queen bed, a separate living area, and the gentle sounds of nature.',
    gallery: [
      `${BASE_URL}media/rooms/garden-view/01-hero.jpg`,
      `${BASE_URL}media/rooms/garden-view/02-bedroom-detail.jpg`,
      `${BASE_URL}media/rooms/garden-view/03-bedroom-alt.jpg`,
      `${BASE_URL}media/rooms/garden-view/04-garden-view.jpg`,
      `${BASE_URL}media/rooms/garden-view/05-bathroom-a.jpg`,
      `${BASE_URL}media/rooms/garden-view/06-closet.jpg`,
      `${BASE_URL}media/rooms/garden-view/07-bathroom-b.jpg`,
      `${BASE_URL}media/rooms/garden-view/08-bedroom-wide.jpg`,
    ],
    image: `${BASE_URL}media/rooms/garden-view/01-hero.jpg`,
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: string[], index = 0) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i + 1) % lightboxImages.length);
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => document.getElementById('send-message')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto text-base md:text-lg py-3 px-8 md:py-4 md:px-10 shadow-xl bg-gradient-to-r from-[#F56416] to-[#FF8A3D] text-white font-semibold"
          >
            Book Your Stay
          </button>
          <button
            onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto text-base md:text-lg py-3 px-8 md:py-4 md:px-10 border-2 border-gray-900 text-gray-900 bg-transparent font-semibold"
          >
            Discover Our Story
          </button>
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

              {/* Thumbnail strip */}
              <div className="px-4 pt-3">
                <div className="flex gap-3 overflow-x-auto pb-3">
                  {room.gallery && room.gallery.map((src: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => openLightbox(room.gallery, idx)}
                      className="w-20 h-14 flex-shrink-0 rounded-md overflow-hidden border border-gray-200 hover:opacity-90 focus:outline-none"
                    >
                      <img src={src} alt={`${room.name} ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
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

        {/* Lightbox modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-4xl">
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="absolute top-3 right-3 text-white bg-black/40 rounded-full p-2"
                aria-label="Close gallery"
              >
                ✕
              </button>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2"
                aria-label="Previous"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2"
                aria-label="Next"
              >
                ›
              </button>

              <div className="w-full bg-white rounded-lg overflow-hidden">
                <img
                  src={lightboxImages[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="w-full max-h-[80vh] object-contain bg-black"
                />
              </div>
            </div>
          </div>
        )}

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