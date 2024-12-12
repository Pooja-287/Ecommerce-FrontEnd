import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams for getting the order ID from the URL

const OrderDetail = () => {
  const { orderId } = useParams(); // Get the orderId from the URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to manage the modal visibility
  const [cart, setCart] = useState([]); // State for cart management

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/orders/${orderId}/details`); // Fetch order details by ID
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        const data = await response.json();
        setOrder(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to add product to cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item._id === product._id);
    if (existingProduct) {
      // If product exists in the cart, increase the quantity
      setCart(cart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If product doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching the order details
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  if (!order) {
    return <div>No order found</div>; // Handle case where no order is found
  }

  return (
    <div className="order-detail">
      <h2>Order Details</h2>
      <div className="order-item">
        {/* Display product image, and when clicked, open the modal */}
        <img
          src={order.product.image || '/images/default-image.png'} // Use default image if no image is available
          alt={order.product.name}
          className="order-image"
          onClick={toggleModal} // Handle image click to toggle modal visibility
        />
        <div className="order-details">
          <h3>{order.product.name}</h3>
          <p>{order.product.description}</p>
          <p className="price">Price: ${order.product.price}</p>
          <p className="category">Category: {order.product.category}</p>
          <p className="status">Status: {order.status}</p>
          
          {/* Add to Cart Button */}
          <button onClick={() => addToCart(order.product)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
      {/* Link to go back to the order list */}
      <Link to="/orders" className="go-back-button">Go Back to Orders</Link>

      {/* Modal to show full image and details */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content">
            {/* Full-sized image */}
            <img
              src={order.product.image || '/images/default-image.png'} // Make sure the image is valid
              alt={order.product.name}
              className="modal-image"
            />
            <h3>{order.product.name}</h3>
            <p>{order.product.description}</p>
            <p className="price">Price: ${order.product.price}</p>
            <p className="category">Category: {order.product.category}</p>
            <p className="status">Status: {order.status}</p>
            <button onClick={toggleModal} className="close-modal">Close</button>
          </div>
        </div>
      )}

      {/* Cart Display */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <ul>
          {cart.length > 0 ? (
            cart.map(item => (
              <li key={item._id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))
          ) : (
            <li>Your cart is empty</li>
          )}
        </ul>
        <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p>Total Price: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderDetail;
