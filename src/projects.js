import React from 'react';

function Projects(){
  const Projects = () => {
    console.log("Projects");
  }
    return(

      <div class="projects-container" id="projects">
          <div class="projects-textwrap">
              <div class="project-header">
                <h1>Case Studies</h1>
                <p>Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business</p>
              </div>
          </div>

          <div class="carousel">
            <button class="carousel__button carousel__button--left">
              <img src="./project/left.png" alt="" />
            </button>
            <div class="carousel__track-container">
              <ul class="carousel__track">
                <li class="carousel__slide">
                  <img class="carousel__image" src="./project/one.jpg" alt="" />
                </li>
                <li class="carousel__slide">
                  <img class="carousel__image" src="./project/two.jpg" alt="" />
                </li>
                <li class="carousel__slide">
                  <img class="carousel__image" src="./project/three.jpg" alt="" />
                </li>
              </ul>
            </div>
            <button class="carousel__button carousel__button--right">
              <img src="./project/right.png" alt="" />
            </button>

            <div class="carousel__nav">
              <button class="carousel__indicator"></button>
              <button class="carousel__indicator current-slide"></button>
              <button class="carousel__indicator"></button>
            </div>

          </div>
      </div>
    )
  }

  export default Projects;

