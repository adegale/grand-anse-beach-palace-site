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
                <p className="text-3xl font-bold">Where the Caribbean Breathes</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#29BF12] text-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm">Years of Hospitality</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Home Away From Home
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                A <strong className="text-[#2B59C3]">family-run boutique hotel</strong>{' '}
                situated on the quiet northern stretch of Grenada&apos;s most beloved
                shoreline, Grand Anse. Rooted in an authentically Caribbean spirit,
                Grand Beach Palace Hotel offers a blend of simplicity, warmth, and soul
                that feels more like visiting family than checking into a resort.
              </p>
              <p>
                Situated in the heart of St. George&apos;s, our property gives guests
                room to breathe — spacious accommodations, gentle ocean breezes, and the
                kind of personal service that remembers your name, your story. Here,
                time slows just enough for you to rediscover the pleasure of ease.
              </p>
              <p>
                Whether you&apos;re a beach lover chasing sunsets, a Caribbean enthusiast
                seeking inspiration steps from the sea, a family looking for comfort and
                convenience, or a long-stay guest wanting a home base on the island —
                our relaxed atmosphere and unbeatable beach access make every stay feel
                effortless.
              </p>
              <p className="font-semibold text-[#F56416] text-xl">
                At Grand Beach Palace Hotel, the Caribbean isn&apos;t a backdrop — it&apos;s
                the rhythm of the entire experience.
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
