import React from 'react';
import { IProduct, IReview } from '../type';

interface Props {
    product: IProduct;
  }

const ProductCard:React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.title}/>  
      <div className='product-card-body'>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <div className='product-card-footer'>
        <div>цена: {product.price}</div>
        <div>купить</div>
      </div>
    </div>
  );
};

export default ProductCard;