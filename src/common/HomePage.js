import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="home-container">
   

      <section className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">Welcome to Organic Dog Treats!</h1>
    <p className="hero-subtitle">
      Premium, healthy, and organic treats your furry friends will love.
    </p>
   
      <p>✅ 100% Natural Ingredients</p>
      <p>✅ Vet-Approved for All Dog Breeds</p>
      <p>✅ Made with Love and Care</p>
    
   
  </div>
  <div className="hero-image-wrapper">
    <img
      src="/image/assets/happy.jpg"
      alt="Happy dog with treats"
      className="hero-image"
      
    />
     <button className="cta-button" onClick={() => handleNavigate('/products')}>
      Shop Now
    </button>
  </div>
</section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          HeroDogTreats™ supports the Canadian Service Dog Foundation, employs
          military veterans, and contracts community living personnel. We do
          this to give back to the community. All of our products are single
          ingredient and from government-inspected suppliers.
        </p>
        <img
          src="/image/assets/Organic ingredients for dog treats.jpg"
          alt="Organic ingredients for dog treats"
          className="about-image"
        />
        <button className="learn-more-button" onClick={() => handleNavigate('/our-story')}>
          Learn More
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="products-section">
        <h2>Our Best-Selling Treats</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src="/image/assets/organic chicken treats.jpg"
              alt="Organic Chicken Treats"
            />
            <h3>Organic Chicken Treats</h3>
            <p>Made with free-range chicken and no preservatives.</p>
          </div>
          <div className="product-card">
            <img src="/image/assets/peanut.jpg" alt="Peanut Butter Biscuits" />
            <h3>Peanut Butter Biscuits</h3>
            <p>A crunchy delight made with organic peanut butter.</p>
          </div>
          <div className="product-card">
            <img src="/image/assets/carrot chews.jpg" alt="Carrot Chews" />
            <h3>Carrot Chews</h3>
            <p>Rich in vitamins and great for dental health.</p>
          </div>
        </div>
        <button className="view-all-button" onClick={() => handleNavigate('/products')}>
          View All Products
        </button>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you!</p>
        <address>
          HERO Dehydrated Dog Treats Inc.
          <br />
          514 Queenston St Unit 8
          <br />
          St. Catharines, ON L2R 7K6
        </address>
        <p>Phone: +1 (905) 988-9666</p>
        <p>Email: info@herodogtreats.com</p>
        <img
          src="/image/assets/contact.jpg"
          alt="Contact us with questions"
          className="contact-image"
        />
        <button className="contact-button" onClick={() => handleNavigate('/contact')}>
          Contact Us
        </button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Organic Dog Treats. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
