import React, { useState } from 'react';
import './styles/RestaurantsNearby.css';

const restaurants = [
  {
    name: "The Urban Dhaba",
    image: "/images/restaurant/restaurant1.png",
    address: "Raj Nagar, Ghaziabad",
    rating: "4.6"
  },
  {
    name: "Tandoori Nights",
    image: "/images/restaurant/restaurant2.png",
    address: "Indirapuram, Ghaziabad",
    rating: "4.3"
  },
  {
    name: "Flavours of South",
    image: "/images/restaurant/restaurant3.png",
    address: "Vaishali, Ghaziabad",
    rating: "4.7"
  }
];

function RestaurantsNearby() {
  const [activeTab, setActiveTab] = useState('dinein');

  return (

    <div className="restaurant-section">
      <h2 className="section-title">Popular Restaurants Near You <span>↓</span></h2>

      <div className="toggle-buttons">
        <button
          className={activeTab === 'dinein' ? 'active' : ''}
          onClick={() => setActiveTab('dinein')}
        >
          Dine In / Takeout
        </button>
        <button
          className={activeTab === 'delivery' ? 'active' : ''}
          onClick={() => setActiveTab('delivery')}
        >
          Home Delivery
        </button>
      </div>

      <div className="restaurant-cards">
        {restaurants.map((res, idx) => (
          <div className={`restaurant-card ${idx === 1 ? 'middle' : ''}`} key={idx}>
            <img src={res.image} alt={res.name} className="restaurant-img" />
            <div className="restaurant-info">
              <h3>{res.name}</h3>
              <p>{res.address}</p>
              <p>⭐ {res.rating}</p>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        ))}
      </div>

      <button className="explore-more-btn">Explore More</button>
    </div>
  );
}

export default RestaurantsNearby;
