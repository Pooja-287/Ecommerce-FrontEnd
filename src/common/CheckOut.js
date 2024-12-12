import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const CheckOut = () => {
  const navigate = useNavigate();  // Replace useHistory with useNavigate
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: ''
  });

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleSubmit = () => {
    // Handle checkout form submission
    if (formData.name && formData.address && formData.phone && formData.paymentMethod) {
      // Process payment and order (This is a mockup step)
      alert('Order placed successfully!');

      // Clear the cart after the order
      localStorage.removeItem('cart');
      setCart([]);

      // Redirect to the order confirmation page
      navigate('/order-confirmation');
    } else {
      alert('Please fill out all the fields.');
    }
  };

  return (
    <div className="checkout-container m-3 ">
      <h2>CHECKOUT</h2>
      <div className="checkout-form ">
        <h3>SHIPPING DETAILS</h3>
        <form>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>
        </form>

        <h3>Your Cart</h3>
        <div className="cart-summary">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.name} - ${item.price}</p>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <button onClick={handleSubmit} className="checkout-button">
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
