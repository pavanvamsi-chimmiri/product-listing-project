'use client';

import { useEffect, useState } from 'react';
import { useFilterStore } from '@/app/store/filterStore';
import { fetchCategories } from '@/app/api/productApi';
import { FiSliders, FiX, FiChevronDown } from 'react-icons/fi';

export default function ProductFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { 
    filters, 
    setSearchTerm, 
    setCategory, 
    setPriceRange, 
    setSortBy, 
    resetFilters 
  } = useFilterStore();
  
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(['all', ...data]);
      } catch (error) {
        console.error('Failed to load categories:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadCategories();
  }, []);
  
  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setPriceRange(value, filters.maxPrice);
    }
  };
  
  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setPriceRange(filters.minPrice, value);
    }
  };
  
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="mb-6">
      {/* Mobile filter button */}
      <div className="mb-4 flex items-center justify-between md:hidden">
        <h2 className="text-xl font-bold">Filters</h2>
        <button
          onClick={toggleFilters}
          className="flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          <FiSliders className="mr-2 h-4 w-4" />
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      {/* Filter controls - Always visible on desktop, toggleable on mobile */}
      <div 
        className={`rounded-lg border border-gray-200 bg-white p-4 md:block ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium">Filters</h3>
          <button
            onClick={resetFilters}
            className="text-sm text-primary-600 hover:underline"
          >
            Reset All
          </button>
        </div>
        
        {/* Search */}
        <div className="mb-4">
          <label htmlFor="search" className="mb-1 block text-sm font-medium text-gray-700">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search products..."
            value={filters.searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input"
          />
        </div>
        
        {/* Categories */}
        <div className="mb-4">
          <label htmlFor="category" className="mb-1 block text-sm font-medium text-gray-700">
            Category
          </label>
          <div className="relative">
            <select
              id="category"
              value={filters.category}
              onChange={(e) => setCategory(e.target.value)}
              className="input appearance-none pr-8"
              disabled={isLoading}
            >
              {isLoading ? (
                <option>Loading categories...</option>
              ) : (
                categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))
              )}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        
        {/* Price Range */}
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={handlePriceMinChange}
              min="0"
              className="input w-full"
            />
            <span className="text-gray-500">to</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={handlePriceMaxChange}
              min="0"
              className="input w-full"
            />
          </div>
        </div>
        
        {/* Sort By */}
        <div>
          <label htmlFor="sortBy" className="mb-1 block text-sm font-medium text-gray-700">
            Sort By
          </label>
          <div className="relative">
            <select
              id="sortBy"
              value={filters.sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="input appearance-none pr-8"
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}