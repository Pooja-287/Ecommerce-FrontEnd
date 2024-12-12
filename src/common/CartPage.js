// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();  // Hook to programmatically navigate

//   // Fetch cart items from localStorage when the component mounts
//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedCartItems);
//   }, []);

//   // Function to remove an item from the cart
//   const removeFromCart = (productId) => {
//     const updatedCartItems = cartItems.filter(item => item._id !== productId);
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//   };

//   // Function to update the quantity based on user input
//   const handleQuantityChange = (productId, newQuantity) => {
//     if (newQuantity <= 0) return; // Prevent setting quantity to 0 or negative
//     const updatedCartItems = cartItems.map((item) =>
//       item._id === productId ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//   };

//   // Calculate total price of items in the cart
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   // Function to navigate to Cart page when the image is clicked
//   const handleImageClick = () => {
//     navigate('/cart');
//   };

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map((item) => (
//             <div key={item._id} className="cart-item">
//               <div className="cart-item-image">
//                 {/* Wrap the image in a Link to navigate to Cart page when clicked */}
//                 <img
//                   src={item.image ? item.image : '/images/default-image.png'}
//                   alt={item.name}
//                   className="cart-item-img"
//                   onClick={handleImageClick} // Click on image will navigate to cart
//                 />
//               </div>
//               <div className="cart-item-info">
//                 <h3>{item.name}</h3>
//                 <p>{item.description}</p>
//                 <p className="price">Price: ${item.price}</p>

//                 {/* Quantity Input */}
//                 <div className="quantity-section">
//                   <input 
//                     type="number" 
//                     value={item.quantity} 
//                     min="1" 
//                     onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
//                     className="quantity-input"
//                   />
//                 </div>

//                 <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

//                 <button className="remove-button" onClick={() => removeFromCart(item._id)}>
//                   Remove from Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//           <div className="cart-total">
//             <h3>Total Price: ${getTotalPrice()}</h3>
//             <Link to="/checkout" className="checkout-button">
//               Proceed to Checkout
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;



















import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductPage = ({ product }) => {
  const navigate = useNavigate();  // Hook to programmatically navigate

  // Function to add product to cart and navigate to Cart page
  const handleImageClick = () => {
    // Fetch current cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    const isProductInCart = storedCartItems.some(item => item._id === product._id);

    if (!isProductInCart) {
      // If product is not in the cart, add it
      storedCartItems.push({ ...product, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(storedCartItems));
    }
    
    // Navigate to the Cart page
    navigate('/cart');
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img
          src={product.image ? product.image : '/images/default-image.png'}
          alt={product.name}
          className="product-img"
          onClick={handleImageClick}  // Click handler for image
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">Price: ${product.price}</p>
      </div>
    </div>
  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  // Function to update the quantity based on user input
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent setting quantity to 0 or negative
    const updatedCartItems = cartItems.map((item) =>
      item._id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  // Calculate total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <div className="cart-item-image">
                <img
                  src={item.image ? item.image : '/images/default-image.png'}
                  alt={item.name}
                  className="cart-item-img"
                />
              </div>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">Price: ${item.price}</p>

                {/* Quantity Input */}
                <div className="quantity-section">
                  <input 
                    type="number" 
                    value={item.quantity} 
                    min="1" 
                    onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                    className="quantity-input"
                  />
                </div>

                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

                <button className="remove-button" onClick={() => removeFromCart(item._id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ${getTotalPrice()}</h3>
            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
export { ProductPage };
