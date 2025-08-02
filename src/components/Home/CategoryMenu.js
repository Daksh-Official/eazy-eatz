import React, { useState } from 'react';
import './styles/CategoryMenu.css';

const categories = [
  'Pizza', 'Biryani', 'Burger', 'Pasta', 'Dessert',
  'Rolls', 'Momos', 'Noodles', 'Ice Cream', 'Drinks', 'Salads'
];

const items = {
  Pizza: [
    {
      name: 'Margherita Pizza',
      image: '/images/menulist/m.jpg',
      restaurant: 'Pizza Palace',
      rating: '4.6',
      price: '₹299',
    },
    {
      name: 'Farmhouse Pizza',
      image: '/images/menulist/fh.jpg',
      restaurant: 'Italian Crust',
      rating: '4.5',
      price: '₹349',
    },
    {
      name: 'Veg Overloaded Pizza',
      image: '/images/menulist/vo.jpg',
      restaurant: 'Slice of Heaven',
      rating: '4.7',
      price: '₹399',
    }
  ]
};

function CategoryMenu() {
  const [activeCategory, setActiveCategory] = useState('Pizza');

  return (
    <div className="category-menu-section">
      <h2 className="category-title">Browse by Category</h2>

      <div className="category-list">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-circle ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sort-filter">
        <button className="sort-btn">Sort</button>
        <button className="filter-btn">Filter</button>
      </div>

      <div className="item-cards">
        {items[activeCategory].map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <div className="item-meta">
                <h3 className="item-name">{item.name}</h3>
                <span className="item-price">{item.price}</span>


              </div>
              <p className="item-restaurant">{item.restaurant}</p>
              <div className="item-meta">
                <span>⭐ {item.rating}</span>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrapper">
        <button className="view-all-btn">View All</button>
      </div>
    </div>
  );
}

export default CategoryMenu;
