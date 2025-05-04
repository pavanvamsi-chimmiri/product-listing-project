import { fetchProducts } from '@/app/api/productApi';
import ProductFilters from '@/app/components/filters/ProductFilters';
import ProductGrid from '@/app/components/products/ProductGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | ShopHub',
  description: 'Browse our complete collection of premium products at ShopHub.',
};

export default async function ProductsPage() {
  const products = await fetchProducts();
  
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-gray-600">
          Browse our complete collection of premium products.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 md:pr-6">
          <ProductFilters />
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}