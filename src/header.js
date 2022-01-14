import React from 'react';

function Header(){
  const Header = () => {
    console.log("Header");
  }
    return(
      <div class="container">
        <div class="header">
          <div class="container-left">
            <a href="#HOME">
              <img src="logo.png" class="logo" alt="Logo" />
            </a>
            <div class="header-text">
              <h3>BRAND, DEV, ECOM, MARKETING</h3>
              <h1>We unleash<br></br></h1>
              <h2>business potential</h2>
              <p>We create brand experiences which are memeorable and distinct. Our experienced team create and develop brands with personality and resonance.</p>
              <p class="letstalk"><a href="#letstalk">Let's talk</a></p>
            </div>
          </div>
          <div class="container-right">
            <div class="navbar">
              <a href="#services">Services</a>
              <a href="#news">Work</a>
              <a href="#contact">About</a>
              <a href="#contact">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
    </div>
    )
  }
  
  export default Header;

