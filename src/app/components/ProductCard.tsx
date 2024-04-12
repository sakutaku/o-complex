import React, { useState, useContext,  createContext } from 'react';
import { IProduct } from '../type';

interface Props {
    product: IProduct;
    addToCart: (product: IProduct, quantity: number) => void;
    removeFromCart: (productId: string) => void;
  }

const ProductCard:React.FC<Props> = ({ product, addToCart, removeFromCart }) => {
    const [showQuantitySelector, setShowQuantitySelector] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleBuyClick = () => {
        setShowQuantitySelector(true);
        setQuantity(quantity + 1);
        addToCart(product, 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            addToCart(product, quantity - 1);
        } 
        if (quantity === 1) {
            setQuantity(quantity - 1);
            addToCart(product, quantity - 1);
            removeFromCart(product.id);
            setShowQuantitySelector(false);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        addToCart(product, quantity + 1);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setQuantity(newQuantity);
        }
    };

  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.title}/>  
      <div className='product-card-body'>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <div className='product-card-footer'>
        <div className='product-price'>цена: {product.price}₽</div>
        {showQuantitySelector ? (
                    <div className='product-add-wrap'>
                        <button onClick={handleDecrease} className='product-add-decrease'>-</button>
                        <input
                            type="text"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button onClick={handleIncrease} className='product-add-increase'>+</button>
                    </div>
                ) : (
                    <div className='product-btn' onClick={handleBuyClick}>купить</div>
                )}
      </div>
    </div>
  );
};

export default ProductCard;