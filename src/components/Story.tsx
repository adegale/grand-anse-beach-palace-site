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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white"></div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story: A Legacy Renewed with Care
              </h2>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                <p>
                  Lennie de Gale founded this <span className="text-[#00B4A6]">family-run boutique hotel</span> 25 years ago. For years, it was a beloved haven under his care. Following a period of transition, his descendants have returned, and we are passionately committed to reviving and modernizing his original vision.
                </p>

                <p>
                  We are passionately committed to reviving and modernizing his original vision.
                </p>

                <p>
                  Whether you're watching the sunset from your veranda, exploring island life, or simply unwinding by the sea, you'll experience the warmth and authenticity that have always defined us.
                </p>

                <p className="font-semibold text-2xl mt-8 italic text-gray-900">
                  At Grand Anse Beach Palace Hotel, those who love it, <span className="text-[#F56416]">love it a lot!</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#2B59C3] via-[#2B59C3]/5 to-[#56416]">
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
              <h3 className="font-bold text-gray-900 mb-3">
                <span className="w-8 h-8 text-[#56416] mb-4 text-xl lg:text-5xl font-light">
                  Heart
                </span>
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
