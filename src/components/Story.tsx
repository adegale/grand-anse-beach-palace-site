export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image column */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}media/hero.jpg`}
                alt="Grand Anse Beach Palace Hotel"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          
          {/* Text column */}
          <div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/70"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-semibold mb-2 text-[#FFD166]">
                GRAND ANSE, GRENADA
              </p>
              <p className="text-3xl font-bold">Where the <span className="accent-caribbean">Caribbean</span> Breathes</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story: A Legacy Renewed with Care
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                Lennie de Gale founded this <span className="text-[#00B4A6]">family-run boutique hotel</span> 25 years ago. For years, it was a beloved haven under his care. Following a period of transition during Mr. de Gale's lengthy illness, we have been honored to take up the torch with deep respect for his legacy.
              </p>

              <p>
                We are passionately committed to reviving and modernizing his original vision as we gently restore the hotel's spirit. Tucked away on the calm northern stretch of Grenada's iconic Grand Anse Beach, the Beach Palace Hotel remains a place infused with <span className="text-[#00B4A6]">authentic warmth</span>—not just a place to stay, but a place to truly unwind and feel at home.
              </p>

              <p>
                Whether you're watching the sunset from your veranda, exploring island life, or settling in for an extended stay, we offer room to breathe: in our spacious accommodations, in the soft ocean breezes, and through <span className="text-[#00B4A6]">personal service that remembers your name</span>. Here, time gently slows, allowing you to rediscover the joy of simply being.
              </p>

              <p className="font-semibold text-2xl mt-8 italic text-gray-900">
  At Grand Anse Beach Palace Hotel, those who love it, <span className="text-[#F56416] font-bold">love it a lot!</span>
</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#2B59C3] via-[#2B59C3]/5 to-[#F56416] p-5 rounded-2xl text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
              <h3 className="font-bold text-gray-900 mb-3">
                <span className="w-8 h-8 text-[#F56416] mb-4 text-xl lg:text-5xl font-light italic">♥</span>
                Heart
              </h3>
              <p>
                At Grand Anse Beach Palace Hotel, those who love it, love it a lot!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}