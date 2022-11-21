import { useState, useEffect } from 'react';
import { getProducts } from '../../services/products/index.js';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return products;
};

export default useProducts;
