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
        if(cartItems.length === 0) {
            alert('Выберите товар!');
            return;
        }
        if (phoneNumber === '') {
            alert('Введите номер телефона!');
            return;
        }

        const processedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters

        const requestBody = JSON.stringify({
            phone: processedPhoneNumber,
            cart: cartItems.map(item => ({ id: item.product.id, quantity: item.quantity }))
        });
    
        const xhr = new XMLHttpRequest();
    
        xhr.open('POST', 'http://o-complex.com:1337/order');
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert('Заказ оформлен!');
                } else {
                    alert('Заказ отменен!');
                    console.error('Error placing order:', xhr.statusText);
                }
            }
        };
    
        // Send the request with the request body
        xhr.send(requestBody);
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