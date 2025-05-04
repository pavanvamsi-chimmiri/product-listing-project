import Link from 'next/link';
import Image from 'next/image';
import { FiTruck, FiShield, FiCreditCard, FiHeart } from 'react-icons/fi';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
            alt="Hero background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
        </div>
        
        <div className="container relative py-20 md:py-28">
          <div className="max-w-xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Discover Premium Products for Every Style
            </h1>
            <p className="mb-8 text-lg text-gray-200">
              Shop the latest trends with confidence. Quality products, exceptional service, and fast delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products" 
                className="bg-primary-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-primary-700 rounded-md"
              >
                Shop Now
              </Link>
              <Link 
                href="/categories" 
                className="border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-gray-900 rounded-md"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold">Shop by Category</h2>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-w-1 aspect-h-1 relative h-64 w-full overflow-hidden">
                  <Image 
                    src={category.image} 
                    alt={category.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold">Why Shop With Us</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <FiTruck className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Free Shipping</h3>
              <p className="text-gray-600">
                Enjoy free shipping on all orders within the US.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <FiShield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Secure Payments</h3>
              <p className="text-gray-600">
                Your transactions are always secure with us.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <FiCreditCard className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy Returns</h3>
              <p className="text-gray-600">
                30-day easy return policy for all products.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <FiHeart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Quality Support</h3>
              <p className="text-gray-600">
                24/7 customer support for all your questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Shopping?</h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-primary-100">
            Join thousands of satisfied customers and find premium products at great prices.
          </p>
          <Link 
            href="/products" 
            className="inline-block rounded-md bg-white px-6 py-3 font-medium text-primary-600 shadow-lg transition-colors hover:bg-gray-100"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
}

// Sample category data
const categories = [
  {
    name: "Men's Clothing",
    slug: "men's clothing",
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Women's Clothing",
    slug: "women's clothing",
    image: "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Jewelry",
    slug: "jewelery",
    image: "https://images.pexels.com/photos/1437900/pexels-photo-1437900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Electronics",
    slug: "electronics",
    image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];