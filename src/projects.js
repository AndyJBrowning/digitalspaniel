import React from 'react';

function Projects(){
  const Projects = () => {
    console.log("Projects");
  }
    return(

      <div class="projects-container">
          <div class="projects-textwrap">
              <div class="project-header">
                <h1>Some of our</h1>
                <h2>recent projects</h2>
              </div>
          </div>

          <div class="carousel">
            <button class="carousel__button carousel__button--left is-hidden">
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
              <button class="carousel__indicator current-slide"></button>
              <button class="carousel__indicator"></button>
              <button class="carousel__indicator"></button>
            </div>

          </div>
      </div>
    )
  }

  export default Projects;

