import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Thompson',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'Our stay at Grand Beach Palace was absolutely magical. The family who runs it made us feel like we were visiting relatives. The beach access is unbeatable, and waking up to those ocean views every morning was pure bliss. We\'ll definitely be back!',
    date: 'November 2024'
  },
  {
    id: 2,
    name: 'James Rodriguez',
    location: 'Miami, USA',
    rating: 5,
    text: 'I\'ve stayed at many Caribbean hotels, but nothing compares to the authentic warmth here. The staff remembered my name after day one, the rooms are spacious and immaculate, and the location on Grand Anse beach is simply perfect. Highly recommend for anyone seeking genuine Caribbean hospitality.',
    date: 'October 2024'
  },
  {
    id: 3,
    name: 'Emma & David Chen',
    location: 'London, UK',
    rating: 5,
    text: 'We brought our two kids and it was the perfect family vacation. The rooms were spacious enough for all of us, the beach was safe and beautiful, and the complimentary breakfast was excellent. The personal touches from the family owners made it extra special.',
    date: 'September 2024'
  },
  {
    id: 4,
    name: 'Marcus Williams',
    location: 'Atlanta, USA',
    rating: 5,
    text: 'Stayed for two weeks while working remotely. The WiFi was excellent, the staff was accommodating with my schedule, and having beach access for afternoon breaks was incredible. This place truly feels like a home away from home.',
    date: 'August 2024'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#F56416]">Guests</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who've made Grand Beach Palace their Caribbean home
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#FFD166] opacity-30" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-[#FFD166] fill-[#FFD166]" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#2B59C3] to-[#29BF12] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-3">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-[#FFD166] fill-[#FFD166]" />
                  <span className="text-3xl font-bold">4.9</span>
                  <span className="text-lg opacity-90">/5.0</span>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Rated Excellent by Our Guests</h3>
            <p className="text-xl opacity-90 mb-6">
              Based on 200+ verified reviews across TripAdvisor, Google, and Booking.com
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">⭐ #1 in St. George's</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">🏆 Travelers' Choice 2024</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">❤️ 98% Recommend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
