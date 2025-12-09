import { Heart, MapPin, Users, Palmtree } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}media/hero.jpg`}
                alt="Grand Anse Beach Palace Hotel"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-semibold mb-2 text-[#FFD166]">
                  GRAND ANSE, GRENADA
                </p>
                <p className="text-3xl font-bold">Where the <span className="accent-caribbean">Caribbean</span> Breathes</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#29BF12] text-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">Years of Hospitality</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story: A Legacy of Warmth, Renewed with Care
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
            <p>
  Tucked away on the quiet northern stretch of Grenada's iconic Grand Anse Beach, the Grand Anse Beach Palace Hotel is a cherished sanctuary where comfort meets authentic character.
</p>

<p>
  Our story began with the late Lennie de Gale, who founded this <span className="text-[#00B4A6]">family-run boutique hotel</span> and infused it with an unmatched Caribbean soul. For years, it was a beloved haven under his care. Following a period of transition during Mr. de Gale's lengthy illness, we have been honored to take up the torch with deep respect for his legacy.
</p>

<p>
  Now, we are passionately committed to reviving and uplifting his original vision. We are gently restoring the hotel's spirit, ensuring it remains a place infused with authentic warmth—not just a place to stay, but a place to truly unwind and feel at home.
</p>

<p>
  Situated in a tranquil corner of St. George's yet close to local amenities, we offer room to breathe: in our spacious accommodations, in the soft ocean breezes, and through personal service that remembers your name. Here, time gently slows, allowing you to rediscover the joy of simply being.
</p>

<p>
  Whether you're watching the sunset from your veranda, exploring island life, or settling in for an extended stay, we are blending the enduring soul of the <span className="text-[#00B4A6]">Caribbean</span> with the ease of home.
</p>

<p>
  At Grand Anse Beach Palace Hotel, the Caribbean isn't just a backdrop — it's the rhythm of your stay and the heart of your experience. We invite you to be part of our new chapter, where a memorable and heartfelt experience awaits.
</p>  
              <p className="font-semibold text-[#F56416] text-xl">
                At Grand Beach Palace Hotel, the Caribbean isn&apos;t a backdrop — it&apos;s
                the rhythm, it&apos;s the experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#2B59C3]/10 to-[#2B59C3]/5 p-5 rounded-xl">
                <Heart className="w-8 h-8 text-[#F56416] mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">Family-Run</h4>
                <p className="text-sm text-gray-600">Personal touch in every detail</p>
              </div>
              <div className="bg-gradient-to-br from-[#29BF12]/10 to-[#29BF12]/5 p-5 rounded-xl">
                <MapPin className="w-8 h-8 text-[#F56416] mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">Prime Location</h4>
                <p className="text-sm text-gray-600">Steps from Grand Anse</p>
              </div>
              <div className="bg-gradient-to-br from-[#FFD166]/10 to-[#FFD166]/5 p-5 rounded-xl">
                <Users className="w-8 h-8 text-[#F56416] mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">Spacious Rooms</h4>
                <p className="text-sm text-gray-600">Room to truly relax</p>
              </div>
              <div className="bg-gradient-to-br from-[#F56416]/10 to-[#F56416]/5 p-5 rounded-xl">
                <Palmtree className="w-8 h-8 text-[#F56416] mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">Authentic Vibe</h4>
                <p className="text-sm text-gray-600">True Caribbean soul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
