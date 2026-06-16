const BASE_URL = import.meta.env.BASE_URL;

const attractions = [
  {
    title: 'Grand Anse Beach',
    distance: '0 min walk',
    description:
      "Experience one of the Caribbean's most beautiful beaches, with two miles of pristine white sand and crystal-clear waters perfect for swimming and water sports.",
    image: `${BASE_URL}media/attractions/grand-anse-beach.jpg`,
    alt: 'Grand Anse Beach aerial view',
  },
  {
    title: "St. George's",
    distance: '10 min drive',
    description:
      'Explore the colorful capital city with its historic forts, bustling market square, and charming harbourside. Visit Fort George for panoramic views of the island.',
    image: `${BASE_URL}media/attractions/st-georges-grenada.jpg`,
    alt: "St. George's harbour Grenada",
  },
  {
    title: 'Underwater Sculpture Park',
    distance: '15 min drive',
    description:
      'Discover a unique underwater art gallery featuring over 65 sculptures submerged in Molinere Bay. Perfect for snorkeling and diving enthusiasts.',
    image: `${BASE_URL}media/attractions/underwater-sculpture-park.jpg`,
    alt: 'Diver exploring underwater sculptures',
  },
  {
    title: 'Belmont Estate',
    distance: '30 min drive',
    description:
      'Step back in time at this 17th-century working cocoa plantation. Learn about chocolate production, enjoy organic farm-to-table dining, and explore lush gardens.',
    image: `${BASE_URL}media/attractions/belmont-estate.jpg`,
    alt: 'Belmont Estate cocoa plantation Grenada',
  },
  {
    title: 'Seven Sisters Waterfalls',
    distance: '45 min drive',
    description:
      'Hike through the rainforest to discover a series of stunning cascading waterfalls. Enjoy refreshing natural pools and breathtaking scenery along the way.',
    image: `${BASE_URL}media/attractions/seven-sisters.jpg`,
    alt: 'Seven Sisters Waterfalls Grenada',
  },
  {
    title: 'Spice Market',
    distance: '10 min drive',
    description:
      "Immerse yourself in the aromatic world of Grenada's famous spices. Shop for nutmeg, cinnamon, and local crafts at the vibrant St. George's market.",
    image: `${BASE_URL}media/attractions/spice-market.jpg`,
    alt: 'Grenada spice market nutmeg and cinnamon',
  },
];

export default function ExploreGrenada() {
  return (
    <section id="explore" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="section-rule" />
          <h2 className="text-palace-navy mb-4">Explore Grenada</h2>
          <p className="text-gray-600 text-lg max-w-xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Discover the natural beauty and cultural richness of the Spice Isle — all within easy reach.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div
              key={attraction.title}
              className="group bg-white border border-gray-100 hover:border-palace-gold transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-palace-navy leading-tight" style={{ fontSize: '1.125rem' }}>
                    {attraction.title}
                  </h3>
                  <span
                    className="bg-palace-navy/8 text-palace-navy text-xs font-semibold px-2.5 py-1 whitespace-nowrap shrink-0 mt-0.5 tracking-wide border border-palace-navy/15"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {attraction.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
