export default function SectionTitle({ tag, title, subtitle, centered = false }) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
          {tag}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-gray mt-3 text-base md:text-lg leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
