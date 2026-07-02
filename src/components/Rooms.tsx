import React, { useState } from 'react';
import { Wifi, Wind, Tv, Coffee, Waves, Car, ChevronLeft, ChevronRight, X } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;

const rooms = [
  {
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
    capacity: '2 guests',
    features: ['Ocean View', 'Private Balcony', 'King Bed', 'Full Kitchenette'],
  },
  {
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
    capacity: '2–10 guests',
    features: ['Panoramic Ocean View', 'Full Kitchen', '5 Bedrooms', 'Multiple Living Areas', 'Premium Amenities'],
  },
  {
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
    capacity: '2–8 guests',
    features: ['Ocean View', 'Private Balcony', 'King Bed', 'Full Kitchenette', 'Flexible Configurations'],
  },
  {
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
    capacity: '2 guests',
    features: ['Garden View', 'Quiet Zone', 'Queen Bed', 'Separate Living Area'],
  },
];

const amenities = [
  { icon: Waves, label: 'Beach Access' },
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Car, label: 'Free Parking' },
  { icon: Coffee, label: 'Kitchen Facilities' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Tv, label: 'Smart TV' },
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
    <section id="rooms" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Section header */}
        <div className="mb-16">
          <div className="section-rule" />
          <h2 className="text-palace-navy mb-4">Accommodations</h2>
          <p className="text-gray-600 text-lg max-w-xl" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400 }}>
            Every room opens toward the sea or the garden — spacious, calm, and made for rest.
          </p>
        </div>

        {/* Room cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white border border-gray-100 hover:border-palace-gold transition-colors duration-300 min-w-0 overflow-hidden"
            >
              {/* Hero image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.gallery[0]}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div
                  className="absolute top-4 left-4 bg-palace-navy text-palace-gold px-3 py-1 text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {room.capacity}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="px-5 pt-4">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {room.gallery.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => openLightbox(room.gallery, idx)}
                      className="w-16 h-11 flex-shrink-0 overflow-hidden border border-gray-200 hover:border-palace-gold transition-colors duration-200 focus:outline-none"
                      aria-label={`View ${room.name} photo ${idx + 1}`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 pt-4">
                <h3 className="text-palace-navy mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="border border-palace-navy/20 text-palace-navy px-3 py-1 text-xs font-medium tracking-wide"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => document.getElementById('send-message')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-palace-navy text-palace-gold py-3 text-sm font-semibold tracking-widest uppercase hover:bg-palace-gold hover:text-palace-navy transition-colors duration-200"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white/70 hover:text-palace-gold transition-colors duration-200 flex items-center gap-1.5 text-sm"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                aria-label="Close gallery"
              >
                <X size={16} /> Close
              </button>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-palace-navy p-2 transition-colors duration-200 z-10"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-palace-navy p-2 transition-colors duration-200 z-10"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>

              <img
                src={lightboxImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="w-full max-h-[80vh] object-contain bg-black"
              />

              <p className="text-center text-white/50 text-xs mt-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                {currentIndex + 1} / {lightboxImages.length}
              </p>
            </div>
          </div>
        )}

        {/* All rooms include */}
        <div className="border-t border-gray-100 pt-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-8 text-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Every room includes
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <amenity.icon className="w-6 h-6 text-palace-navy" strokeWidth={1.5} />
                <span className="text-xs font-medium text-gray-600 tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
