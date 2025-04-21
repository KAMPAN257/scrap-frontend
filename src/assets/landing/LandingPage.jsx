import React from 'react';
import './LandingPage.css'; 
import { Link } from 'react-router-dom';

function LandingPage() {
  const features = [
    {
      title: 'Verified Recyclable Listings',
      description: 'Ensure the quality and authenticity of listed recyclable materials with detailed categorization and transparent specifications.',
      icon: '♻️ ',
    },
    {
      title: 'Traceable Waste Journey',
      description: 'Track the journey of recyclable materials from seller to buyer, promoting accountability and ethical reuse within supply chains.',
      icon: '🔗',
    },
    {
      title: 'Environmental Impact Tracking',
      description: 'Monitor and analyze the environmental impact of your transactions, contributing to a greener economy and informed decision-making.',
      icon: '📊',
    },
    {
      title: 'Community Marketplace For Recyclers',
      description: 'Connect with a network of verified individuals and businesses dedicated to sustainable recycling and responsible waste management.',
      icon: '🤝',
    },
    {
      title: 'Ethical Reuse Justification',
      description: 'Buyers are required to justify their purchase, ensuring materials are used for ethical and environmentally sound recycling purposes.',
      icon: '✅ ',
    },
  ];

  const steps = [
    {
      title: 'List Your Recyclables',
      description: 'Sellers (individuals or companies) can easily create listings for their recyclable waste materials. This includes specifying the type of material (plastic, paper, e-scrap, etc.), quantity, quality, and any relevant details to attract potential buyers.',
      icon: '📦',
    },
    {
      title: ' Connect with Responsible Buyers',
      description: 'Buyers interested in specific recyclable materials can browse listings and connect directly with sellers. ScrapeGenie facilitates communication to discuss material specifics, pricing, and logistics.',
      icon: '🤝',
    },
    {
      title: 'Justify Ethical Reuse',
      description: 'To ensure environmentally friendly practices, buyers are required to provide a clear justification for their purchase. This step promotes responsible recycling and prevents misuse of valuable resources.',
      icon: '✅ ',
    },
    {
      title: 'Transparent Transactions',
      description: 'ScrapeGenie provides a platform for transparent transactions, allowing both buyers and sellers to track the process and maintain records. This fosters trust and accountability within the recycling ecosystem.',
      icon: '📄  ',
    },
    {
      title: 'Contribute to a Greener Future',
      description: 'By facilitating the responsible trade of recyclable waste, ScrapeGenie helps divert materials from landfills, conserves natural resources, and encourages a circular economy, ultimately contributing to a more sustainable and environmentally conscious future.',
      icon: '🌱',
    },
  ];

  const testimonials = [
    {
      quote: 'ScrapeGenie has made it easy to find and support sustainable businesses.',
      author: 'Jane Doe',
    },
    {
      quote: 'I love being part of a community that cares about the environment.',
      author: 'John Smith',
    },
  ];

  return (
    <div className="landing-page">


<nav className="navbar">
  <div className="navbar-container">
    <a href="/" className="navbar-logo">
      ScrapeGenie
    </a>
    <ul className="navbar-menu">
      <li className="navbar-item">
        <Link to="/about" className="navbar-link">
          About Us
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/selectloginrole" className="navbar-link">
          Log In
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/selectrole" className="navbar-link">
          Sign Up
        </Link>
      </li>
    </ul>
    <div className="navbar-cart">
      <a href="/cart" className="navbar-cart-link black-cart">
        🛒
        {/* Optional cart count */}
        {/* <span className="cart-count">3</span> */}
      </a>
    </div>
  </div>
</nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Sustainable Scrape for a Greener Planet.</h1>
          <p>ScrapeGenie connects businesses and consumers committed to environmental sustainability. Discover and scrape verified eco-friendly products, track your impact, and join a community dedicated to a greener future.</p>
          {/* <button className="cta-button">Get Started</button> */}
          <Link to="/product" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How ScrapeGenie Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-item" key={index}>
              <span className="step-icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} ScrapeGenie. All rights reserved.</p>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;