import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <div className="our-story-container">
      {/* Header Section */}
      

      {/* Our Story Section */}
      <section className="our-story-section">
        <h1>Welcome To Dog Treats </h1>
        <p>
          At Organic Dog Treats, we believe in providing the best for your furry friends. Founded with a passion for pets, our mission is to deliver high-quality, organic, and nutritious treats that promote their health and happiness.
        </p>
        <p>
          
        </p>


        <ul class="treats-list">
  <li><i class="fas fa-leaf"></i><strong>100% Natural Treats:</strong> All our treats are 100% natural and federally inspected suppliers, are CFIA approved.</li>
  <li><i class="fas fa-ban"></i><strong>No Artificial Preservatives:</strong> All treats are 100% natural single-ingredient that are free of harmful chemicals—absolutely no additives or preservatives.</li>
  <li><i class="fas fa-clock"></i><strong>Long-Lasting Treats:</strong> You don't need to require refrigeration. Dehydration removes moisture, which allows you to stock up on high quantities without the worry of ever getting mold.</li>
  <li><i class="fas fa-heart"></i><strong>Maintain a Healthy Heart:</strong> Our Treats and bones are rich in Omega-3 and Omega-6 fatty acids for cholesterol regulation to maintain a healthy heart.</li>
  <li><i class="fas fa-dumbbell"></i><strong>Excellent Source of Protein:</strong> Dehydrated treats and bones are a perfect source of natural fibre, calcium, glucosamine, and protein.</li>
  <li><i class="fas fa-fire"></i><strong>Dried Low & Slow To Lock in Flavour:</strong> All treats are slowly dried to ensure optimal nutritional retention.</li>
</ul>


        


      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Organic Dog Treats. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OurStory;
