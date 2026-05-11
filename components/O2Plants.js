import Image from 'next/image'
import Button from './Button'

export default function O2Plants() {
  const benefits = [
    { icon: '🌬️', title: 'Purifies Air', desc: 'Removes toxins and CO₂ from your environment naturally.' },
    { icon: '😴', title: 'Better Sleep', desc: 'Releases oxygen at night, improving sleep quality.' },
    { icon: '🧘', title: 'Reduces Stress', desc: 'Greenery is proven to lower anxiety and boost mood.' },
    { icon: '💧', title: 'Humidifies Air', desc: 'Maintains optimal indoor humidity through transpiration.' },
  ]

  return (
    <section className="py-16 md:py-20 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-0">
            {/* Image */}
            <div className="relative w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto lg:h-[500px] shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1632399041768-0a56c2b91c0a?w=800&q=80"
                alt="O2 Plant - Air purifying plant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs text-text-gray">Air Quality</p>
                <p className="font-bold text-primary text-sm">+40% Oxygen Output</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-medium">Active Purification</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:p-10 lg:p-12 text-white">
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                🌿 Featured Collection
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
                O₂ Plants — Breathe Cleaner Air
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
                Our specially curated O₂ plants are scientifically proven to improve indoor air quality. Give your family the gift of fresher, cleaner air every day.
              </p>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{b.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{b.title}</p>
                      <p className="text-white/70 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-bg-cream transition-colors duration-300 active:scale-95">
                  Shop O₂ Plants
                  <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300 active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
