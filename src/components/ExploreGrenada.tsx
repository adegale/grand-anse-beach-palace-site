const attractions = [
  {
        title: 'Grand Anse Beach',
        distance: '0 min walk',
        description:
                "Experience one of the Caribbean's most beautiful beaches, with two miles of pristine white sand and crystal-clear waters perfect for swimming and water sports.",
        image: '/media/Grand Anse Beach.jpg',
        alt: 'Grand Anse Beach aerial view',
  },
  {
        title: "St. George's",
        distance: '10 min drive',
        description:
                'Explore the colorful capital city with its historic forts, bustling market square, and charming harbourside. Visit Fort George for panoramic views of the island.',
        image: "/media/St. George's Grenada.jpg",
        alt: "St. George's harbour Grenada",
  },
  {
        title: 'Underwater Sculpture Park',
        distance: '15 min drive',
        description:
                'Discover a unique underwater art gallery featuring over 65 sculptures submerged in Molinere Bay. Perfect for snorkeling and diving enthusiasts.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
        alt: 'Diver exploring underwater sculptures',
  },
  {
        title: 'Belmont Estate',
        distance: '30 min drive',
        description:
                'Step back in time at this 17th-century working cocoa plantation. Learn about chocolate production, enjoy organic farm-to-table dining, and explore lush gardens.',
        image: '/media/Belmont Estate.jpg',
        alt: 'Belmont Estate cocoa plantation Grenada',
  },
  {
        title: 'Seven Sisters Waterfalls',
        distance: '45 min drive',
        description:
                'Hike through the rainforest to discover a series of stunning cascading waterfalls. Enjoy refreshing natural pools and breathtaking scenery along the way.',
        image: '/media/Seven Sisters.jpg',
        alt: 'Seven Sisters Waterfalls Grenada',
  },
  {
        title: 'Spice Market',
        distance: '10 min drive',
        description:
                "Immerse yourself in the aromatic world of Grenada's famous spices. Shop for nutmeg, cinnamon, and local crafts at the vibrant St. George's market.",
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
        alt: 'Grenada spice market nutmeg and cinnamon',
  },
  ];

const MapPin = () => (
    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>svg>
  );

export default function ExploreGrenada() {
    return (
          <section id="explore" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  {/* Header */}
                        <div className="text-center mb-12">
                                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                              Explore <span className="text-[#F56416]">Grenada</span>span>
                                  </h2>h2>
                                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                              Discover the natural beauty and cultural richness of the Spice Isle
                                  </p>p>
                        </div>div>
                
                  {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {attractions.map((attraction) => (
                        <div
                                        key={attraction.title}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                      >
                          {/* Image */}
                                      <div className="relative aspect-[4/3] overflow-hidden">
                                                      <img
                                                                          src={attraction.image}
                                                                          alt={attraction.alt}
                                                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                          loading="lazy"
                                                                        />
                                      </div>div>
                        
                          {/* Body */}
                                      <div className="p-6">
                                                      <div className="flex items-start justify-between gap-2 mb-3">
                                                                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                                                          {attraction.title}
                                                                        </h3>h3>
                                                                        <div className="flex items-center gap-1 text-[#F56416] text-sm font-semibold whitespace-nowrap shrink-0 mt-0.5">
                                                                                            <MapPin />
                                                                                            <span>{attraction.distance}</span>span>
                                                                        </div>div>
                                                      </div>div>
                                                      <p className="text-gray-600 leading-relaxed">
                                                        {attraction.description}
                                                      </p>p>
                                      </div>div>
                        </div>div>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}</svg>
