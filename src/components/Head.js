// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faInfoCircle, faBox, faPhoneAlt, faShoppingCart, faCreditCard, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

// // Individual Button Components
// const HomeButton = () => (
//   <Link to="/" className="nav-button">
//     <FontAwesomeIcon icon={faHome} /> Home
//   </Link>
// );

// const OurStoryButton = () => (
//   <Link to="/our-story" className="nav-button">
//     <FontAwesomeIcon icon={faInfoCircle} /> Our Story
//   </Link>
// );

// const ProductsButton = () => (
//   <Link to="/products" className="nav-button">
//     <FontAwesomeIcon icon={faBox} /> Our Products
//   </Link>
// );

// const ContactUsButton = () => (
//   <Link to="/contact-us" className="nav-button">
//     <FontAwesomeIcon icon={faPhoneAlt} /> Contact Us
//   </Link>
// );

// const CartButton = () => (
//   <Link to="/cart" className="nav-button">
//     <FontAwesomeIcon icon={faShoppingCart} /> Cart Page
//   </Link>
// );

// const CheckoutButton = () => (
//   <Link to="/checkout" className="nav-button">
//     <FontAwesomeIcon icon={faCreditCard} /> Checkout
//   </Link>
// );

// const ProfileButton = () => (
//   <Link to="/profile" className="nav-button">
//     <FontAwesomeIcon icon={faUser} /> Profile
//   </Link>
// );



// // Header Component
// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <div className="nav-left">
//           <HomeButton />
//           <OurStoryButton />
//           <ProductsButton />
//           <ContactUsButton />
//           <CartButton />
//           <CheckoutButton />
//           <ProfileButton />
//         </div>
       
//       </nav>
//     </header>
//   );
// };

// export default Header;





import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBox, faPhoneAlt, faShoppingCart, faCreditCard, faUser } from '@fortawesome/free-solid-svg-icons';

// Individual Button Components
const HomeButton = () => (
  <Link to="/" className="nav-button ">
    <FontAwesomeIcon icon={faHome} /> HOME
  </Link>
);

const OurStoryButton = () => (
  <Link to="/our-story" className="nav-button">
    <FontAwesomeIcon icon={faInfoCircle} /> OUR STORY
  </Link>
);

const ProductsButton = () => (
  <Link to="/products" className="nav-button">
    <FontAwesomeIcon icon={faBox} /> OUR PRODUCTS
  </Link>
);

const ContactUsButton = () => (
  <Link to="/contact-us" className="nav-button">
    <FontAwesomeIcon icon={faPhoneAlt} /> CONTACT US
  </Link>
);

const CartPageButton = () => (
  <Link to="/cart" className="nav-button">
    <FontAwesomeIcon icon={faShoppingCart} /> CART PAGE
  </Link>
);

const CheckoutButton = () => (
  <Link to="/checkout" className="nav-button">
    <FontAwesomeIcon icon={faCreditCard} /> CHECKOUT
  </Link>
);

const ProfileButton = () => (
  <Link to="/profile" className="nav-button">
<FontAwesomeIcon icon={faUser} /> PROFILE
  </Link>
);



// Header Component
const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <HomeButton />
          <OurStoryButton />
          <ProductsButton />
          <ContactUsButton />
          <CartPageButton />
          <CheckoutButton />
          <ProfileButton />
        </div>

       

        
      </nav>
    </header>
  );
};

export default Header;
