import React from 'react';

function Footer(){
  const Footer = () => {
    console.log("Footer");
  }
    return(

        <div class="footer-container" id="contact">
            <div class="text-holder">
                <div class="footer-container-left">
                    <div class="footer-text">
                        <h1>We're a brands<br></br></h1>
                        <h2>best friend</h2>
                        <p class="letstalk"><a href="#letstalk">Let's Talk</a></p>
                    </div>
                </div>
                <div class="footer-container-right">
                    <div class="list-left">
                        <div class="explore">
                            <h1>EXPLORE</h1>
                            <ul>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Work</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-center">
                        <div class="services">
                            <h1>SERVICES</h1>
                            <ul>
                                <li><a href="#">Brand</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Marketing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="list-right">
                        <div class="questions">
                            <h1>QUESTIONS?</h1>
                            <p class="ptag-header">Call us</p>
                            <p class="ptag-sub">0121 345 678</p>
                            <p class="ptag-header">Email Us</p>
                            <p class="ptag-sub"><a href="mailto:info@digitalspaniel.co.uk">info@digitalspaniel.co.uk</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Footer;

