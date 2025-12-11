import { Heart, MapPin, Users, Palmtree } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
Lennie de Gale founded this family-run boutique hotel 25 years ago. For years, it was a beloved haven under his care until his lengthy illness and subsequent death. Now, we are honored to take up the torch with deep respect for the legacy he built.
We are passionately committed to reviving and modernizing his original vision as we gently restore the hotel's spirit, ensuring it remains a place infused with authentic warmth for you to truly unwind and feel relaxed.
Tucked away on the calm northern stretch of Grenada's iconic Grand Anse Beach, the Palace Hotel is a cherished sanctuary where comfort meets authentic character.
Whether you're watching the sunset from your veranda, exploring island life, or settling in for an extended stay, we bring that enduring soul of the Caribbean.
We invite you to be part of our new chapter, where a memorable and heartfelt experience awaits.
At Grand Beach Palace Hotel, those who love it, love it a lot!
</p>  
              <p className="font-semibold text-[#F56416] text-xl">
                At Grand Beach Palace Hotel, those who love it, love it a lot!
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
