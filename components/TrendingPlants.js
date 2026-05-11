import Image from 'next/image'
import SectionTitle from './SectionTitle'
import Button from './Button'

const trendingPlants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    description: 'The iconic split-leaf plant. Perfect for bright indirect light. Low maintenance.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80',
    accent: '#E8F5E2',
    badge: '🌿 Trending',
  },
  {
    id: 2,
    name: 'Bird of Paradise',
    description: 'Dramatic, architectural foliage. Makes a bold statement in any room.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    accent: '#FFF3E0',
    badge: '⭐ Popular',
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    description: 'Gorgeous large leaves with a sculptural form. A designer\'s favourite.',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80',
    accent: '#E8EAF6',
    badge: '🏆 Best Seller',
  },
]

export default function TrendingPlants() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <SectionTitle
            tag="🔥 What's Hot"
            title="Trending Plants"
            subtitle="The most-loved plants our customers are obsessing over right now."
          />
          <Button variant="outline" className="self-start md:self-auto shrink-0">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trendingPlants.map((plant) => (
            <div
              key={plant.id}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: plant.accent }}
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-white text-text-dark text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {plant.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-text-dark mb-1">{plant.name}</h3>
                <p className="text-text-gray text-sm leading-relaxed mb-4 line-clamp-2">{plant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary text-xl">₹{plant.price.toLocaleString()}</span>
                  <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
