import { Product } from '@/app/api/types';
import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, price, image, rating } = product;
  
  return (
    <div className="card group overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Quick add to cart button (appears on hover) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100">
          <button className="btn btn-primary flex items-center gap-2 rounded-full px-6 py-2 shadow-lg">
            <FiShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      
      {/* Product details */}
      <div className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="mb-1 line-clamp-2 h-12 text-lg font-medium leading-tight text-gray-800 hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="mb-2 flex items-center">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating.rate) ? 'fill-current' : ''
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">({rating.count})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          <Link 
            href={`/products/${id}`}
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}