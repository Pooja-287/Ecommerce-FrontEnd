import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    // Ideally, you would fetch the order details from a backend
    const storedOrder = JSON.parse(localStorage.getItem('order')) || null;
    if (storedOrder) {
      setOrder(storedOrder);
    } else {
      navigate('/'); // Redirect to homepage if no order is found
    }
  }, [navigate]); // Include navigate as a dependency

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>
      <p>Thank you for your purchase, {order.userInfo.name}!</p>
      <h3>Order Details:</h3>
      <div>
        <h4>Shipping Information:</h4>
        <p>Name: {order.userInfo.name}</p>
        <p>Email: {order.userInfo.email}</p>
        <p>Address: {order.userInfo.address}</p>
      </div>
      <div>
        <h4>Your Order:</h4>
        <ul>
          {order.cart.map((item) => (
            <li key={item._id}>
              <p>{item.name} - ${item.price}</p>
            </li>
          ))}
        </ul>
        <p>Total Price: ${order.totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
