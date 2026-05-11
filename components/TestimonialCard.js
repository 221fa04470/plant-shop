export default function TestimonialCard({ name, avatar, rating, review, location, plant }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {[1,2,3,4,5].map((star) => (
          <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill={star <= rating ? '#F5A623' : '#E5E7EB'}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-text-gray text-sm leading-relaxed flex-1">
        &ldquo;{review}&rdquo;
      </p>

      {/* Plant tag */}
      {plant && (
        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full w-fit">
          <span>🌿</span> {plant}
        </span>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
          {avatar || name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-text-dark text-sm">{name}</p>
          {location && <p className="text-xs text-text-gray">{location}</p>}
        </div>
        <div className="ml-auto">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#3D7A3A" opacity="0.2">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
