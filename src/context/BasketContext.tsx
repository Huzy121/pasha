import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the structure of a basket item
interface BasketItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the context value structure
export interface BasketContextProps {
  basketItems: BasketItem[];
  totalPrice: number;
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
}

// Create the context with a default value
const defaultBasketContext: BasketContextProps = {
  basketItems: [],
  totalPrice: 0,
  addToBasket: () => {}, // Default no-op function
  removeFromBasket: () => {}, // Default no-op function
  updateItemQuantity: () => {}, // Default no-op function
};

// Create the context
const BasketContext = createContext<BasketContextProps>(defaultBasketContext);

// Create a provider component
export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  // Calculate the total price
  const totalPrice = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to add items to the basket
  const addToBasket = (item: BasketItem) => {
    setBasketItems((prevItems) => {
      const existingItem = prevItems.find((basketItem) => basketItem.id === item.id);
      if (existingItem) {
        return prevItems.map((basketItem) =>
          basketItem.id === item.id ? { ...basketItem, quantity: basketItem.quantity + 1 } : basketItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Function to remove items from the basket
  const removeFromBasket = (id: string) => {
    setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to update item quantity
  const updateItemQuantity = (id: string, quantity: number) => {
    setBasketItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
      )
    );
  };

  return (
    <BasketContext.Provider value={{ basketItems, totalPrice, addToBasket, removeFromBasket, updateItemQuantity }}>
      {children}
    </BasketContext.Provider>
  );
};

// Hook for easy access to context
export const useBasket = () => {
  return useContext(BasketContext);
};

export { BasketContext };
