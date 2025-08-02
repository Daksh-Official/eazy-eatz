import React from 'react';
import './styles/Recommendations.css';
const recommendations = [
  {
    name: 'Paneer Tikka',
    image: '/images/recommend/pt.jpg',
    price: '₹199',
    restaurant: 'Spice Hub',
    rating: '4.5'
  },
  {
    name: 'Chicken Biryani',
    image: '/images/recommend/cb.jpg',
    price: '₹249',
    restaurant: 'Biryani House',
    rating: '4.7'
  },
  {
    name: 'Veg Burger',
    image: '/images/recommend/vb.jpg',
    price: '₹149',
    restaurant: 'Burger Villa',
    rating: '4.3'
  },
  {
    name: 'Pasta Alfredo',
    image: '/images/recommend/pa.jpg',
    price: '₹179',
    restaurant: 'Italiano',
    rating: '4.6'
  }
];

function Recommendations() {
  return (
    <div className="recommendations-section">
      <div className="recommendations-header">
        <h2>Recommended</h2>
        <a href="/" className="view-all">View All</a>
      </div>
      <div className="recommendations-grid">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="recommendation-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="recommendation-overlay">
              <div className="dish-name">{item.name}</div>
              <div className="details">
                <span>{item.price}</span> • <span>{item.restaurant}</span> • ⭐ {item.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
