"use client"
import React, { useEffect, useState } from 'react';
import { IProduct, IReview } from '../../type';
import ProductCard from '@/app/components/ProductCard';

function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
    
  useEffect(() => {
    const fetchProducts = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://o-complex.com:1337/products?page=1&page_size=20');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            setProducts(data.products);
          } else {
            console.error('Error fetching reviews:', xhr.statusText);
          }
        }
      };
      xhr.send();
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="products-card-container">
        {products && products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;