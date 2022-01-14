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
              <div class="project-options">
                  <ul>
                    <li><a class="project-selected" href="#">All</a></li>
                    <li><a href="#">Branding</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                  </ul>
              </div>
                <div class="project-images">
                    <div align="center" class="category">
                        <div class="category1">
                            <div class="category-text-holder">

                            </div>
                        </div>
                    </div>
                    <div align="center" class="category">
                        <div class="category2">
                            <div class="category-text-holder">
                                <h1>Make Ideas Happen</h1>
                                <p>A local paper with big ideas needed A sharp new brand to inspire readers.</p>
                                <a href="#">Full project</a>
                            </div>
                        </div>
                    </div>
                    <div align="center" class="category">
                        <div class="category3">
                            <div class="category-text-holder">
                                
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Projects;

