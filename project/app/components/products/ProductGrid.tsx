'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/app/api/types';
import ProductCard from './ProductCard';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import { useFilterStore } from '@/app/store/filterStore';
import { motion } from 'framer-motion';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export default function ProductGrid({ products, isLoading = false }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { filters } = useFilterStore();
  
  useEffect(() => {
    if (!products) return;
    
    let result = [...products];
    
    // Apply search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchLower) || 
        product.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply category filter
    if (filters.category && filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= filters.minPrice && product.price <= filters.maxPrice
    );
    
    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        // Keep default order
        break;
    }
    
    setFilteredProducts(result);
  }, [products, filters]);
  
  if (isLoading) {
    return (
      <div className="flex h-64 w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  
  if (!filteredProducts || filteredProducts.length === 0) {
    return (
      <div className="my-10 rounded-lg bg-gray-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-medium">No products found</h3>
        <p className="text-gray-600">
          Try adjusting your filters or search criteria.
        </p>
      </div>
    );
  }
  
  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}