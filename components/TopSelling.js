import SectionTitle from './SectionTitle'
import PlantCard from './PlantCard'
import Button from './Button'

const topSellingPlants = [
  {
    id: 1,
    name: 'Peace Lily',
    price: 549,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1616425215374-6e3c5dff24ae?w=500&q=80',
    tag: 'Sale',
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 399,
    image: 'https://images.unsplash.com/photo-1599598425947-5202edd56fde?w=500&q=80',
    rating: 4.8,
    reviews: 256,
    isNew: false,
  },
  {
    id: 3,
    name: 'Pothos Golden',
    price: 299,
    image: 'https://images.unsplash.com/photo-1620127252536-cf016f7d7f01?w=500&q=80',
    rating: 4.7,
    reviews: 189,
    isNew: true,
  },
  {
    id: 4,
    name: 'ZZ Plant',
    price: 649,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1603436326446-74b86a39f78c?w=500&q=80',
    tag: 'Sale',
    rating: 4.9,
    reviews: 97,
  },
  {
    id: 5,
    name: 'Rubber Plant',
    price: 749,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=500&q=80',
    rating: 4.6,
    reviews: 74,
    isNew: true,
  },
  {
    id: 6,
    name: 'Aloe Vera',
    price: 199,
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=500&q=80',
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 7,
    name: 'Spider Plant',
    price: 249,
    image:'https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?w=500&q=80',
    rating: 4.5,
    reviews: 143,
  },
  {
    id: 8,
    name: 'Chinese Evergreen',
    price: 499,
    originalPrice: 599,
    image:'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=500&q=80',
    tag: 'Sale',
    rating: 4.7,
    reviews: 88,
  },
]

export default function TopSelling() {
  return (
    <section className="py-16 md:py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <SectionTitle
            tag="💚 Customer Favorites"
            title="Top Selling Plants"
            subtitle="Our best-rated, most-ordered plants — trusted by thousands."
          />
          <Button variant="outline" className="self-start md:self-auto shrink-0">
            Browse All Plants
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {topSellingPlants.map((plant) => (
            <PlantCard key={plant.id} {...plant} />
          ))}
        </div>
      </div>
    </section>
  )
}
