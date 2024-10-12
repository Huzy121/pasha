import { useState } from 'react';
import { useBasket } from '../../../context/BasketContext';
import { categories } from './MenuCategories'; // Adjust the path as needed

const Menu = () => {
  const [activeTab, setActiveTab] = useState('tab0'); // Default active tab
  const activeCategory = categories.find((cat) => cat.id === activeTab);
  
  const openCategory = (tabId: string) => {
    setActiveTab(tabId);
  };
  const { addToBasket } = useBasket();

  // Function to add an item to the basket
  const handleAddToBasket = (item: { id: any; name: any; price: any; }) => {
    // Create the basket item object
    const basketItem = {
      id: item.id, // Make sure this matches a unique identifier for the item
      name: item.name,
      price: item.price,
      quantity: 1, // Assuming adding one at a time
    };
    
    addToBasket(basketItem);
  };
  return (
    <div className="menu-categories">
      {/* Tab buttons */}
      <div className="tab-links">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => openCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tab-content">
      <ul>
        {activeCategory?.content && activeCategory.content.map((item, index) => (
          <li key={index}>
            <div className="item-name-price">
              <span className="item-name">{item.name}</span>
              <div className='price-add-to-cart'>
                <span className="item-price">£{item.price.toFixed(2)}</span>
                {/* Add item to basket on button click */}
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToBasket(item)}
                >
                  +
                </button>
              </div>
            </div>
            {item.description && (
              <div className="item-description">{item.description}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Menu;