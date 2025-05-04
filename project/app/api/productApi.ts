import axios from 'axios';
import { Product, Category } from './types';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await axios.get<Product>(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get<Category[]>(`${API_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`${API_URL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error;
  }
};