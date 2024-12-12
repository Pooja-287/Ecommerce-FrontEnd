import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigating to the order details page

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders'); // Fetch orders from the API
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  if (orders.length === 0) {
    return <div>No orders found</div>; // Handle case with no orders
  }

  return (
    <div className="order-list">
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <div key={order._id} className="order-item">
          {/* Display product image */}
          <img
            src={order.product.image || '/images/default-image.png'} // Use default image if no image is available
            alt={order.product.name}
            className="order-image"
          />
          <div className="order-details">
            <h3>{order.product.name}</h3>
            <p>{order.product.description}</p>
            <p className="price">Price: ${order.product.price}</p>
            <p className="category">Category: {order.product.category}</p>
            <p className="status">Status: {order.status}</p>
          </div>
          {/* Link to order details page */}
          <Link to={`/order/${order._id}`} className="view-order">
            View Order Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
