import React from 'react';

function Content1(){
  const Content1 = () => {
    console.log("Content1");
  }
    return(

      <div class="content-container">
        <div class="text-holder">
          <div class="content-container-left">
            <div class="content-text">
                <h1>What are<br></br></h1>
                <h2>we capable of</h2>
                <p>By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.</p>
                <p class="letstalk"><a href="#letstalk">Our process</a></p>
            </div>
          </div>
          <div class="content-container-right">
            <div class="list-left">
              <div class="brand">
                <h1>BRAND</h1>
                <ul>
                  <li><a href="#">Brand Strategy</a></li>
                  <li><a href="#">Logo &#38; Name</a></li>
                  <li><a href="#">Indentity &#38; Collateral</a></li>
                </ul>
              </div>
              <div class="development">
                <h1>DEVELOPMENT</h1>
                <ul>
                  <li><a href="#">eCommerce</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Mobile Apps</a></li>
                </ul>
              </div>
            </div>
            <div class="list-right">
              <div class="brand">
                <h1>MARKETING</h1>
                <ul>
                  <li><a href="#">Digital</a></li>
                  <li><a href="#">Market Research</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Content1;

