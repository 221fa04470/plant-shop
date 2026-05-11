export default function Button({ children, variant = 'primary', size = 'md', onClick, className = '', type = 'button' }) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-card-hover',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
    accent: 'bg-accent text-white hover:bg-orange-500 shadow-md',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
