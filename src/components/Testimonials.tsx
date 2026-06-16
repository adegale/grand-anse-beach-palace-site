import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Thompson',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'Our stay at Grand Beach Palace was absolutely magical. The family who runs it made us feel like we were visiting relatives. The beach access is unbeatable, and waking up to those ocean views every morning was pure bliss. We\'ll definitely be back!',
    date: 'November 2024',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    location: 'Miami, USA',
    rating: 5,
    text: 'I\'ve stayed at many Caribbean hotels, but nothing compares to the authentic warmth here. The staff remembered my name after day one, the rooms are spacious and immaculate, and the location on Grand Anse beach is simply perfect. Highly recommend for anyone seeking genuine Caribbean hospitality.',
    date: 'October 2024',
  },
  {
    id: 3,
    name: 'Emma & David Chen',
    location: 'London, UK',
    rating: 5,
    text: 'We brought our two kids and it was the perfect family vacation. The rooms were spacious enough for all of us, the beach was safe and beautiful, and the complimentary breakfast was excellent. The personal touches from the family owners made it extra special.',
    date: 'September 2024',
  },
  {
    id: 4,
    name: 'Marcus Williams',
    location: 'Atlanta, USA',
    rating: 5,
    text: 'Stayed for two weeks while working remotely. The WiFi was excellent, the staff was accommodating with my schedule, and having beach access for afternoon breaks was incredible. This place truly feels like a home away from home.',
    date: 'August 2024',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="section-rule" />
          <h2 className="text-palace-navy mb-4">Guest Stories</h2>
          <p className="text-gray-600 text-lg max-w-xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Real experiences from travelers who have made Grand Anse Beach Palace their Caribbean home.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border-l-4 border-palace-gold pl-8 pr-6 py-8 border-t border-r border-b border-gray-100"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-palace-gold fill-palace-gold" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-palace-navy text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {t.location}
                  </p>
                </div>
                <p className="text-xs text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {t.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rating banner */}
        <div className="bg-palace-navy px-8 md:px-16 py-12 text-center text-white">
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-2 border border-palace-gold/40 px-8 py-3">
              <Star className="w-5 h-5 text-palace-gold fill-palace-gold" />
              <span className="text-3xl font-light text-white" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
                4.9
              </span>
              <span className="text-palace-gold/70 text-sm">/5.0</span>
            </div>
          </div>
          <h3 className="text-white mb-3" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 400 }}>
            Rated Excellent by Our Guests
          </h3>
          <p className="text-white/70 mb-8 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Based on 200+ verified reviews across TripAdvisor, Google, and Booking.com
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            <span className="border border-palace-gold/40 text-palace-gold px-4 py-2 tracking-wide">
              No. 1 in St. George's
            </span>
            <span className="border border-palace-gold/40 text-palace-gold px-4 py-2 tracking-wide">
              Travelers' Choice 2024
            </span>
            <span className="border border-palace-gold/40 text-palace-gold px-4 py-2 tracking-wide">
              98% Recommend
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
