"use client"
import React, { useEffect, useState } from 'react';
import { IProduct, IReview } from '../../type';
import ProductCard from '@/app/components/ProductCard';
import Cart from '@/app/components/Cart';

function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [cartItems, setCartItems] = useState<{ product: IProduct; quantity: number }[]>([]);

//   const addToCart = (product: IProduct, quantity: number) => {
//     const existingCartItemIndex = cartItems.findIndex(item => item.product.id === product.id);
//     if (existingCartItemIndex !== -1) {
//         const updatedCartItems = [...cartItems];
//         updatedCartItems[existingCartItemIndex] = {
//             ...updatedCartItems[existingCartItemIndex],
//             quantity: updatedCartItems[existingCartItemIndex].quantity + quantity
//         };
//         setCartItems(updatedCartItems);
//     } else {
//         setCartItems([...cartItems, { product, quantity }]);
//     }
// };

const addToCart = (product: IProduct, quantity: number) => {
  const existingCartItemIndex = cartItems.findIndex(item => item.product.id === product.id);
  if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = {
          ...updatedCartItems[existingCartItemIndex],
          quantity: quantity
      };
      setCartItems(updatedCartItems);
  } else {
      setCartItems([...cartItems, { product, quantity }]);
  }
};

const removeFromCart = (productId: string) => {
  setCartItems(cartItems.filter(item => item.product.id !== productId));
};
    
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
      <div className='products-cart'>
        <Cart cartItems={cartItems} />
      </div>
      <div className="products-card-container">
        {products && products.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;