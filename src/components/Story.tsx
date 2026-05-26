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
                Our Story: A Family Legacy, Renewed
              </h2>

              <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                <p>
                  Grand Anse Beach Palace Hotel was founded over 25 years ago by Lennie de Gale, whose vision was to create a warm, welcoming place by the sea where guests could experience the beauty and spirit of Grenada.
                </p>

                <p>
                  Following his passing, the hotel has been entrusted to his children, who are committed to honoring his legacy while thoughtfully restoring, refreshing, and modernizing the property for a new era.
                </p>

                <p>
                  As we move forward, we remain deeply grateful to the loyal guests who have stayed with us over the years and helped make this place what it is. At the same time, we are expanding our vision, welcoming new visitors who are seeking an authentic Grenadian beachside experience with comfort, care, and a renewed sense of possibility.
                </p>

                <p>
                  At Grand Anse Beach Palace Hotel, our story is one of family, resilience, and renewal — and we look forward to sharing the next chapter with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
