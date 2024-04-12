import React, { useState } from 'react';
import { IProduct } from '../type';
import InputMask from 'react-input-mask';

interface Props {
    product: IProduct;
    quantity: number;
}

interface CartProps {
    cartItems: { product: IProduct; quantity: number }[];
}

const Cart: React.FC<CartProps> = ({cartItems}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    };

    const handleOrderClick = () => {
        // Logic for placing the order with phone number and cart items
        console.log('Order placed:', { phoneNumber, cartItems });
    };

    return (
        <div className="cart">
            <h3>Добавленные товары</h3>
            {cartItems.length === 0 ? (
                <div className='cart-no-items'>Нет выбранных товаров</div>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <span>
                                {item.product.title}
                                </span>
                                <span className='cart-item-price'>
                                x{item.quantity} - {item.product.price * item.quantity}₽
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className='cart-total'>К оплате: {calculateTotalPrice()}</div>
                </div>
            )}
            <div className='cart-order'>
                <div className='cart-order-phone-wrap'>
                    <InputMask
                        className='cart-order-phone'
                        mask="+7 (999)-(999)-(99)-(99)"
                        value={phoneNumber}
                        placeholder="+7 (___)-(___)-(__)-(__)"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleOrderClick} className='cart-order-btn'>Заказать</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;