import React, { useState } from 'react';
import './MenuPage.css';

const menuItems = [
  {
    name: 'Cilantro Lime Ramen',
    image: '/images/items/item1.jpg',
    category: 'CHINESE',
    isVeg: true,
    price: 130,
    originalPrice: 299,
    discount: '57% OFF',
    availableTime: '10:30AM',
    customizable: true
  },
  {
    name: 'Pesto Paneer Pasta',
    image: '/images/items/item2.jpg',
    category: 'ITALIAN',
    isVeg: true,
    price: 180,
    originalPrice: 250,
    discount: '28% OFF',
    availableTime: '12:00PM',
    customizable: true
  },
  {
    name: 'All-American BBQ Steak Bowl',
    image: '/images/items/item3.jpg',
    category: 'AMERICAN',
    isVeg: false,
    price: 299,
    originalPrice: 399,
    discount: '25% OFF',
    availableTime: '01:00PM',
    customizable: false
  },
  {
    name: 'Peri Peri Parmesan XL Bowl',
    image: '/images/items/item4.jpg',
    category: 'MEXICAN',
    isVeg: false,
    price: 250,
    originalPrice: 370,
    discount: '32% OFF',
    availableTime: '02:30PM',
    customizable: true
  },
  {
    name: 'The Mafias Meal',
    image: '/images/items/item5.jpg',
    category: 'ITALIAN',
    isVeg: false,
    price: 320,
    originalPrice: 450,
    discount: '29% OFF',
    availableTime: '11:00AM',
    customizable: false
  },
  {
    name: 'Creamy Pesto Chicken Spaghetti',
    image: '/images/items/item6.jpg',
    category: 'ITALIAN',
    isVeg: false,
    price: 260,
    originalPrice: 340,
    discount: '24% OFF',
    availableTime: '12:30PM',
    customizable: true
  },
  {
    name: 'Meatball Arrabiata Rice Bowl',
    image: '/images/items/item7.jpg',
    category: 'ITALIAN',
    isVeg: false,
    price: 270,
    originalPrice: 360,
    discount: '25% OFF',
    availableTime: '01:45PM',
    customizable: false
  },
  {
    name: 'Moroccan Meatball Spaghetti',
    image: '/images/items/item8.jpg',
    category: 'MOROCCAN',
    isVeg: false,
    price: 310,
    originalPrice: 400,
    discount: '23% OFF',
    availableTime: '02:15PM',
    customizable: true
  },
  {
    name: 'Signature Chicken Rice Bowl',
    image: '/images/items/item9.jpg',
    category: 'AMERICAN',
    isVeg: false,
    price: 280,
    originalPrice: 370,
    discount: '24% OFF',
    availableTime: '01:30PM',
    customizable: false
  },
  {
    name: 'Chicken in Steakhouse Sauce',
    image: '/images/items/item10.jpg',
    category: 'AMERICAN',
    isVeg: false,
    price: 300,
    originalPrice: 390,
    discount: '23% OFF',
    availableTime: '12:45PM',
    customizable: true
  },
  {
    name: 'Chicken Maryland',
    image: '/images/items/item11.jpg',
    category: 'AMERICAN',
    isVeg: false,
    price: 290,
    originalPrice: 360,
    discount: '19% OFF',
    availableTime: '11:45AM',
    customizable: false
  },
  {
    name: 'Chicken in Mushroom Sauce',
    image: '/images/items/item12.jpg',
    category: 'EUROPEAN',
    isVeg: false,
    price: 310,
    originalPrice: 410,
    discount: '24% OFF',
    availableTime: '01:00PM',
    customizable: true
  },
  {
    name: 'Rooster Chicken Rice Bowl',
    image: '/images/items/item13.jpg',
    category: 'INDIAN',
    isVeg: false,
    price: 260,
    originalPrice: 330,
    discount: '21% OFF',
    availableTime: '02:00PM',
    customizable: true
  },
  {
    name: 'Smokey grilled Chicken Steak',
    image: '/images/items/item14.jpg',
    category: 'GRILL',
    isVeg: false,
    price: 340,
    originalPrice: 420,
    discount: '19% OFF',
    availableTime: '01:15PM',
    customizable: false
  },
  {
    name: 'Indian Chilli Chicken Bowl',
    image: '/images/items/item15.jpg',
    category: 'SOUTH INDIAN',
    isVeg: false,
    price: 270,
    originalPrice: 360,
    discount: '25% OFF',
    availableTime: '10:30AM',
    customizable: true
  }
];


function MenuPage() {
  const [page, setPage] = useState(1);

  return (
    <div className="menu-page">
      <h2 className="menu-title">Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <div className="menu-category">
              <span className="veg-icon">{item.isVeg ? '🟢' : '🔴'}</span>
              {item.category}
            </div>
            <img src={item.image} alt={item.name} className="menu-img" />
            <div className='extra-details'>
              <h3 className="menu-name">{item.name}</h3>
              <div className="menu-price">
                <span className="price">₹{item.price}</span>
                <span className="original-price"><s>₹{item.originalPrice}</s></span>
                <span className="discount">{item.discount}</span>
              </div>
              <button className="preorder-btn">Pre-Order+</button>
              {item.customizable && <div className="customisable-text">Customisable</div>}
              <div className="availability-text">Available from {item.availableTime}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default MenuPage;
