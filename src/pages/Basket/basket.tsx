import React, { useContext } from 'react';
import { BasketContext, BasketContextProps } from '../../context/BasketContext'; // Update with correct path
import './basket.css';

const Basket: React.FC = () => {
  const { basketItems, totalPrice, removeFromBasket, updateItemQuantity } = useContext<BasketContextProps>(BasketContext);

  return (
    <div className='basket-container'>
      <h1>SHOPPING CART</h1>
      {basketItems.length === 0 ? (
        <p>Your basket is currently empty.</p>
      ) : (
        <div>
          <table className="basket-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>PRODUCT</th>
                <th></th>
                <th style={{ textAlign: 'right' }}>QUANTITY</th> 
                
              </tr>
            </thead>
            <tbody>
              {basketItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <button className="remove-btn" onClick={() => removeFromBasket(item.id)}>✕</button>
                  </td>
                  <td className='item-item-quantity'>
                    <span>{item.name}</span>
                    <div>{item.quantity} x <span className='price-color'>£{item.price.toFixed(2)}</span></div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div className="quantity-controls">
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          <div className="basket-total">
            <h2>Total: £{totalPrice.toFixed(2)}</h2>
          </div>
          <div className="basket-actions">
            <button className="continue-shopping-btn">← CONTINUE SHOPPING</button>
            <button className="update-basket-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
