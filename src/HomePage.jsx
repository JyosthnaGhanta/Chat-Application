import React from 'react'; 
import './HomePage.css';
import { Link } from 'react-router-dom'; 
import MessengerAppSection from './MessengerAppSection';
import Footer from './Footer';
const HomePage = () => {
  return (
    <div class="home-page">
      <nav class="navbar">
        <div class="logo">Link Up</div>
        <ul class="nav-links">
          {['Link Up', 'Messenger APP', 'Services'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`}><b>{item}</b></a>
            </li>
          ))}
        </ul>

        <div class="auth-buttons">
          <Link to="/login" class="login-btn">Login</Link>
          <Link to="/signup" class="signup-btn">Sign Up</Link>
        </div>
      </nav>

      <header class="hero-section" id="link-up">
        <div class="hero-content">
          <h1>Link Up</h1>
          <p>Welcome to Link Up!</p>
        </div>
      </header>

      <section id="messenger-app">
        <MessengerAppSection />
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
