import { fetchCategories } from '@/app/api/productApi';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories | ShopHub',
  description: 'Browse all product categories available at ShopHub.',
};

// Category images mapping
const categoryImages = {
  "electronics": "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "jewelery": "https://images.pexels.com/photos/1437900/pexels-photo-1437900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "men's clothing": "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "women's clothing": "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default async function CategoriesPage() {
  const categories = await fetchCategories();
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Shop by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link 
            key={category}
            href={`/products?category=${category}`}
            className="group block"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
              <Image 
                src={categoryImages[category as keyof typeof categoryImages] || "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"}
                alt={category}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
            
            <div className="bg-white p-6 rounded-b-lg shadow-md transition-shadow group-hover:shadow-lg">
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <p className="text-gray-600">
                {getCategoryDescription(category)}
              </p>
              <div className="mt-4 text-primary-600 font-medium flex items-center">
                Browse Collection
                <svg 
                  className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function getCategoryDescription(category: string): string {
  switch (category) {
    case 'electronics':
      return 'Latest gadgets and tech accessories for your everyday needs.';
    case 'jewelery':
      return 'Elegant jewelry pieces to complement any outfit or occasion.';
    case "men's clothing":
      return 'Stylish and comfortable clothing options for the modern man.';
    case "women's clothing":
      return 'Trendy and fashionable apparel for the contemporary woman.';
    default:
      return 'Discover our collection of high-quality products.';
  }
}