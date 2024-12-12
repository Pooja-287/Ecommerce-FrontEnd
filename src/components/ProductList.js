// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { useHistory } from 'react-router-dom';


// const ProductList = () => {
//   const { category } = useParams();  // Get the category from the URL parameters
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state for fetching products

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/products');
//         const data = await response.json();
//         setProducts(data);  // Set the fetched product data
//         setLoading(false); // Set loading to false after fetching is complete
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setLoading(false); // Set loading to false if an error occurs
//       }
//     };

//     fetchProducts(); // Call the fetchProducts function
//   }, []); // Empty dependency array ensures it runs once on mount

//   const addToCart = (product) => {
//     // Retrieve the current cart from localStorage
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Add the product to the cart if it's not already there
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert('Product added to cart!');
//   };

//   // Filter products by category if it's provided
//   const filteredProducts = category
//     ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
//     : products;

//   if (loading) return <div>Loading...</div>; // Show loading state while fetching products

//   return (
//     <div className="product-list">
     
//       <h2>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "All Products"}</h2>
//       <div className="product-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div key={product._id} className="product-item">
//               {/* Image container */}
//               <div className="image-container">
//                 <Link to={`/product/${product._id}`}>
//                   <img
//                     src={product.image ? product.image : '/images/default-image.png'}
//                     alt={product.name}
//                     className="product-image"
//                   />
//                 </Link>
//               </div>
//               {/* Product details */}
//               <div className="product-details">
//                 <h3>{product.name}</h3>
//                 <p>{product.description}</p>
//                 <p className="price">Price: ${product.price}</p>
//                 <p className="category">Category: {product.category}</p>
//                 {/* Add to Cart button */}
//                 <button onClick={() => addToCart(product)} className="add-to-cart-button">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="no-products-message">
//             <p>No products found.</p> {/* Show message when no products are found */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;




import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';  // Import Link from react-router-dom

const ProductList = () => {
  const { category } = useParams();  // Get the category from the URL parameters
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for fetching products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);  // Set the fetched product data
        setLoading(false); // Set loading to false after fetching is complete
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); // Set loading to false if an error occurs
      }
    };

    fetchProducts(); // Call the fetchProducts function
  }, []); // Empty dependency array ensures it runs once on mount

  const addToCart = (product) => {
    // Retrieve the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart if it's not already there
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart!');
  };

  // Filter products by category if it's provided
  const filteredProducts = category
    ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : products;

  if (loading) return <div>Loading...</div>; // Show loading state while fetching products

  return (
    <div className="product-list">
      <h2>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "All Products"}</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} className="product-item">
              {/* Image container */}
              <div className="image-container">
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.image ? product.image : '/images/default-image.png'}
                    alt={product.name}
                    className="product-image"
                  />
                </Link>
              </div>
              {/* Product details */}
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">Price: ${product.price}</p>
                <p className="category">Category: {product.category}</p>
                {/* Add to Cart button */}
                <button onClick={() => addToCart(product)} className="add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products-message">
            <p>No products found.</p> {/* Show message when no products are found */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
