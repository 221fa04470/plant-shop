'use client'
import { useState } from 'react'
import Button from './Button'

export default function PlantCard({ name, price, originalPrice, image, tag, rating, reviews, isNew }) {
  const [wishlist, setWishlist] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 1500)
  }

  return (
    <div className="plant-card group relative flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-bg-light">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {isNew && (
            <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              New
            </span>
          )}
          {tag && (
            <span className="bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setWishlist(!wishlist)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            wishlist
              ? 'bg-red-500 text-white'
              : 'bg-white text-text-gray hover:bg-red-50 hover:text-red-400'
          }`}
          aria-label={wishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={wishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Quick Add - visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 text-sm font-semibold transition-colors duration-200 ${
              addedToCart
                ? 'bg-green-500 text-white'
                : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            {addedToCart ? '✓ Added to Cart' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-text-gray mb-1">Indoor Plant</p>
        <h3 className="font-heading font-semibold text-text-dark text-base mb-1 line-clamp-1">{name}</h3>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} width="12" height="12" viewBox="0 0 24 24" fill={star <= Math.floor(rating) ? '#F5A623' : '#E5E7EB'}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className="text-xs text-text-gray">({reviews})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary text-lg">₹{price}</span>
            {originalPrice && (
              <span className="text-text-gray line-through text-sm">₹{originalPrice}</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="w-9 h-9 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Add to cart"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}