import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To access URL parameters

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProduct(data); // Set the product details
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]); // Dependency array to refetch when the ID changes

  if (loading) return <div>Loading product details...</div>; // Show loading message while fetching details

  return (
    <div className="product-detail">
      {product ? (
        <div className="product-detail-container">
          <h2>{product.name}</h2>
          <img
            src={product.image ? product.image : '/images/default-image.png'}
            alt={product.name}
            className="product-detail-image"
          />
          <p>{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <p className="category">Category: {product.category}</p>
          <button>Add to Cart</button> {/* Add to Cart button */}
        </div>
      ) : (
        <div>No product found.</div> // If the product is not found, show this message
      )}
    </div>
  );
};

export default ProductDetail;
