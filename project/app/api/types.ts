export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Category = string;

export type FiltersState = {
  searchTerm: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'default' | 'price-low-high' | 'price-high-low' | 'rating';
};