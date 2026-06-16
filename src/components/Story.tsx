export default function Story() {
  return (
    <section id="story" className="py-0 bg-white overflow-hidden">
      <div className="grid md:grid-cols-[55%_45%] min-h-[600px]">

        {/* Image column — full bleed */}
        <div className="relative h-80 md:h-auto">
          <img
            src={`${import.meta.env.BASE_URL}media/hero.jpg`}
            alt="Grand Anse Beach Palace Hotel"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Text column */}
        <div className="flex items-center px-8 md:px-16 py-20 bg-white">
          <div className="max-w-lg">
            <div className="section-rule" />
            <h2 className="text-palace-navy mb-8">
              A Family Legacy,<br />Renewed
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.9375rem' }}>
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

            <div className="mt-10">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-palace-navy text-palace-navy px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-palace-navy hover:text-palace-gold transition-colors duration-200"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
