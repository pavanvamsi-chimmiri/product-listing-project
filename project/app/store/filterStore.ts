'use client';

import { create } from 'zustand';
import { FiltersState } from '@/app/api/types';

type FilterStore = {
  filters: FiltersState;
  setSearchTerm: (searchTerm: string) => void;
  setCategory: (category: string) => void;
  setPriceRange: (min: number, max: number) => void;
  setSortBy: (sortBy: FiltersState['sortBy']) => void;
  resetFilters: () => void;
};

const initialFilters: FiltersState = {
  searchTerm: '',
  category: 'all',
  minPrice: 0,
  maxPrice: 1000,
  sortBy: 'default',
};

export const useFilterStore = create<FilterStore>((set) => ({
  filters: initialFilters,
  
  setSearchTerm: (searchTerm) => 
    set((state) => ({ filters: { ...state.filters, searchTerm } })),
  
  setCategory: (category) => 
    set((state) => ({ filters: { ...state.filters, category } })),
  
  setPriceRange: (minPrice, maxPrice) => 
    set((state) => ({ filters: { ...state.filters, minPrice, maxPrice } })),
  
  setSortBy: (sortBy) => 
    set((state) => ({ filters: { ...state.filters, sortBy } })),
  
  resetFilters: () => set({ filters: initialFilters }),
}));