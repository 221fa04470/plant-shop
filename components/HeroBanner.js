import Image from 'next/image'
import Button from './Button'

export default function HeroBanner() {
  return (
    <section className="bg-bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              🌿 Fresh Arrivals This Season
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-5">
              Bring Nature{' '}
              <span className="text-primary relative">
                Home
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 9 C50 3, 150 3, 198 9" stroke="#3D7A3A" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
              {' '}With Us
            </h1>
            <p className="text-text-gray text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Discover our handpicked collection of beautiful plants. From air-purifying indoor varieties to stunning outdoor statement pieces — transform your space naturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Explore Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
              {[
                { value: '500+', label: 'Plant Species' },
                { value: '10K+', label: 'Happy Customers' },
                { value: '4.9★', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-text-gray mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1545759300-8197aed5d7a0?w=800&q=80"
                alt="Beautiful indoor plants collection"
                fill
                className="object-cover"
                priority
              />
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white rounded-2xl px-4 py-3 shadow-card">
                <p className="text-xs text-text-gray">Best Seller</p>
                <p className="font-heading font-bold text-text-dark text-sm">Monstera Deliciosa</p>
                <p className="text-primary font-semibold text-sm mt-0.5">₹899</p>
              </div>
              {/* O2 badge */}
              <div className="absolute bottom-6 right-6 bg-primary text-white rounded-2xl px-4 py-3 shadow-card">
                <p className="text-xs opacity-80">Purifies Air</p>
                <p className="font-bold text-sm">+O₂ Plant</p>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
