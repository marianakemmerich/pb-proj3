import axios from 'axios';
import { IProducts } from '../types/Products';

export const fetchProducts = async (): Promise<IProducts[]> => {
  const response = await axios.get<IProducts[]>('http://localhost:3001/products');
  return response.data;
};
