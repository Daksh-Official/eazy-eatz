import React from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
    const navigate = useNavigate();

    const cartItems = [
        { name: 'Pesto Paneer Pasta', quantity: 3, price: 199 },
        { name: 'Rooster Chicken Rice Bowl', quantity: 2, price: 170 },
    ];

    const recommendations = [
        'Peri Peri Parmesan XL Bowl',
        'Smokey Chargrilled Chicken Steak',
        'Cilantro Lime Ramen'
    ];

    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const gst = Math.round(totalPrice * 0.05);
    const grandTotal = totalPrice + gst;

    return (
        <div className="checkout-page">
            <header className="checkout-header">
                <button onClick={() => navigate('/')} className="go-back">← Go Back</button>
                <div>
                    <h2>The Urban Dhaba</h2>
                    <p>Expected Delivery: 45 min</p>
                </div>
            </header>

            <div className="saving-banner">🎉 You saved ₹120 on this order!</div>

            <section className="cart-section">
                <h3>Your Cart</h3>
                {cartItems.map((item, idx) => (
                    <div key={idx} className="cart-item">
                        <span className='items-name'>{item.name}</span>
                        <div className="quantity-control">
                            <button className="qty-btn">−</button>
                            <span>{item.quantity}</span>
                            <button className="qty-btn">+</button>
                        </div>
                        <span>₹{item.price * item.quantity}</span>
                    </div>
                ))}
                <button className="add-more-btn">+ Add More Items</button>
            </section>

            <section className="checkout-recommend-section">
                <h3>Recommended for You</h3>
                <div className="checkout-recommend-grid">
                    {recommendations.map((item, idx) => (
                        <div className="checkout-recommend-card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(/images/items/item${idx + 1}.jpg)` }}>
                            <span className="checkout-recommend-title">{item}</span>
                            <button className="recommend-add-btn">+</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="coupon-section">
                <h3>Apply Coupons</h3>
                <input type="text" placeholder="Enter coupon code" />
                <button>Apply</button>
            </section>

            <section className="delivery-details">
                <h3>Delivery Details</h3>
                <p><strong>Delivery By:</strong> 12:30 PM</p>
                <p>
                    <strong>Address:</strong> 123, Raj Nagar, Ghaziabad
                    <button className="change-address-btn">Change</button>
                </p>
                <p><strong>Contact:</strong> +91 9876543210</p>
            </section>

            <section className="bill-section">
                <h3>Bill Summary</h3>
                <div className="bill-row"><span>Subtotal:</span><span>₹{totalPrice}</span></div>
                <div className="bill-row"><span>GST (5%):</span><span>₹{gst}</span></div>
                <div className="bill-row total"><span>Total:</span><span>₹{grandTotal}</span></div>
            </section>


            <div className="sticky-bar">
                <div className="payment-options">💳 UPI | 💵 Cash | 🏦 Card</div>
                <button className="place-order-btn">Place Order ₹{grandTotal}</button>
            </div>
        </div>
    );
}

export default CheckoutPage;
