import React from 'react';

function Work(){
  const Work = () => {
    console.log("Work");
  }
    return(

      <div class="work-container" id="work">
          <div class="work-text-wrap">
            <div class="work-header">
                <h1>Some of our</h1>
                <h2>recent projects</h2>
            </div>
            <div class="work-nav">
                <ul>
                    <li><a href="" class="selected">All</a></li>
                    <li><a href="">Branding</a></li>
                    <li><a href="">Web Design</a></li>
                    <li><a href="">Digital Marketing</a></li>
                </ul>
            </div>
            <div class="work-cards">
                <div class="work-cards-holder">
                    <a href="#" class="world-cards-holder-link">
                        <div class="work-card-1">
                            <h1>Make Ideas Happen</h1>
                            <p>A local paper with big ideas needed A sharp new brand to inspire</p>
                            <a href="#">Full Project</a>
                        </div>
                    </a>
                </div>
                <div class="work-cards-holder">
                    <a href="#" class="world-cards-holder-link">
                        <div class="work-card-2">
                            <h1>Make Ideas Happen</h1>
                            <p>A local paper with big ideas needed A sharp new brand to inspire</p>
                            <a href="#">Full Project</a>
                        </div>
                    </a>
                </div>
                <div class="work-cards-holder">
                    <a href="#" class="world-cards-holder-link">
                        <div class="work-card-3">
                            <h1>Make Ideas Happen</h1>
                            <p>A local paper with big ideas needed A sharp new brand to inspire</p>
                            <a href="#">Full Project</a>
                        </div>
                    </a>
                </div>
            </div>
          </div>
      </div>
    )
  }

  export default Work;

