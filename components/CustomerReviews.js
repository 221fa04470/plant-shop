import SectionTitle from './SectionTitle'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    review: 'My Monstera arrived perfectly packaged and in excellent health. The leaves are stunning! GreenLeaf has been my go-to plant shop for over a year now. Highly recommend!',
    location: 'Mumbai, Maharashtra',
    plant: 'Monstera Deliciosa',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    rating: 5,
    review: 'Ordered 3 plants and all arrived in perfect condition. The packaging was incredible — not a single leaf damaged. Customer service was also very helpful when I had questions.',
    location: 'Bengaluru, Karnataka',
    plant: 'Snake Plant',
  },
  {
    id: 3,
    name: 'Ananya Krishnan',
    rating: 5,
    review: 'The Bird of Paradise I bought has completely transformed my living room. It\'s thriving and growing new leaves already. The quality is just exceptional. Will order again!',
    location: 'Chennai, Tamil Nadu',
    plant: 'Bird of Paradise',
  },
  {
    id: 4,
    name: 'Arjun Patel',
    rating: 4,
    review: 'Great selection of rare plants that I couldn\'t find anywhere else locally. The plant care tips included in the packaging were super helpful for a beginner like me.',
    location: 'Ahmedabad, Gujarat',
    plant: 'Fiddle Leaf Fig',
  },
  {
    id: 5,
    name: 'Kavya Nair',
    rating: 5,
    review: 'Fast delivery and the plants were so well cared for. My Peace Lily is already blooming! The whole experience from browsing to delivery was smooth and delightful.',
    location: 'Kochi, Kerala',
    plant: 'Peace Lily',
  },
  {
    id: 6,
    name: 'Deepak Singh',
    rating: 5,
    review: 'I have bought from several online plant stores and GreenLeaf is by far the best. The plants are healthy, prices are fair, and delivery is always on time. Five stars!',
    location: 'Delhi, NCR',
    plant: 'ZZ Plant',
  },
]

export default function CustomerReviews() {
  const avgRating = (testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            💬 Customer Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-3">
            What Our Customers Say
          </h2>
          <p className="text-text-gray text-base md:text-lg max-w-lg mx-auto">
            Thousands of happy plant parents trust GreenLeaf for their indoor garden.
          </p>

          {/* Overall rating */}
          <div className="mt-6 inline-flex items-center gap-4 bg-bg-light rounded-2xl px-6 py-4">
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-primary">{avgRating}</p>
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-left">
              <p className="font-semibold text-text-dark">Based on {testimonials.length * 18}+ reviews</p>
              <p className="text-sm text-text-gray">Across all platforms</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
