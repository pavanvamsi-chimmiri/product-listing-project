import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchProductById } from '@/app/api/productApi';
import { FiStar, FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    const product = await fetchProductById(parseInt(params.id));
    
    return {
      title: `${product.title} | ShopHub`,
      description: product.description,
    };
  } catch (error) {
    return {
      title: 'Product Not Found | ShopHub',
      description: 'The requested product could not be found.',
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    const product = await fetchProductById(parseInt(params.id));
    
    return (
      <div className="container py-8">
        <nav className="mb-6">
          <ol className="flex flex-wrap items-center text-sm">
            <li className="after:mx-2 after:content-['/'] after:text-gray-400">
              <Link href="/" className="text-gray-600 hover:text-primary-600">
                Home
              </Link>
            </li>
            <li className="after:mx-2 after:content-['/'] after:text-gray-400">
              <Link href="/products" className="text-gray-600 hover:text-primary-600">
                Products
              </Link>
            </li>
            <li className="after:mx-2 after:content-['/'] after:text-gray-400">
              <Link 
                href={`/products?category=${product.category}`} 
                className="text-gray-600 hover:text-primary-600"
              >
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li className="text-gray-900 font-medium truncate">
              {product.title}
            </li>
          </ol>
        </nav>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {/* Product Image */}
            <div className="bg-gray-50 p-8 rounded-lg flex items-center justify-center">
              <div className="relative w-full h-80 md:h-96">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating.rate) ? 'fill-current' : ''
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
                </span>
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-6">
                ${product.price.toFixed(2)}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="border-t border-b border-gray-200 py-4 my-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Category:</span>
                  <Link 
                    href={`/products?category=${product.category}`}
                    className="text-primary-600 hover:underline"
                  >
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="text-success font-medium">In Stock</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary flex-1 flex items-center justify-center gap-2 py-3">
                  <FiShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="btn btn-outline flex items-center justify-center gap-2 py-3">
                  <FiHeart className="h-5 w-5" />
                  <span className="hidden sm:inline">Add to Wishlist</span>
                </button>
                <button className="btn btn-outline flex items-center justify-center gap-2 py-3">
                  <FiShare2 className="h-5 w-5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}