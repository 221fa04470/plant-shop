import SectionTitle from './SectionTitle'
import PlantCard from './PlantCard'
import Button from './Button'

const topSellingPlants = [
  {
    id: 1,
    name: 'Peace Lily',
    price: 549,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=500&q=80',
    tag: 'Sale',
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 399,
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500&q=80',
    rating: 4.8,
    reviews: 256,
    isNew: false,
  },
  {
    id: 3,
    name: 'Pothos Golden',
    price: 299,
    image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=500&q=80',
    rating: 4.7,
    reviews: 189,
    isNew: true,
  },
  {
    id: 4,
    name: 'ZZ Plant',
    price: 649,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=500&q=80',
    tag: 'Sale',
    rating: 4.9,
    reviews: 97,
  },
  {
    id: 5,
    name: 'Rubber Plant',
    price: 749,
    image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=500&q=80',
    rating: 4.6,
    reviews: 74,
    isNew: true,
  },
  {
    id: 6,
    name: 'Aloe Vera',
    price: 199,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500&q=80',
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 7,
    name: 'Spider Plant',
    price: 249,
    image: 'https://images.unsplash.com/photo-1586093728776-e5a7d1e2d8f0?w=500&q=80',
    rating: 4.5,
    reviews: 143,
  },
  {
    id: 8,
    name: 'Chinese Evergreen',
    price: 499,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=500&q=80',
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