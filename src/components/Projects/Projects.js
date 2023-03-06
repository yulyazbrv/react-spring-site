import React, { useState } from 'react';
import './Projects.css';

const Projects = (props) => {
    const { projects } = props;
    const [value, setValue] = useState('');
    let index = 0;
  
    const filterredProjects = projects.filter((project) => {
      return project.name.toLowerCase().includes(value.toLowerCase());
    });
  
    return (
      <div className="second-intro">
        <div className='block-search'>
          <form>
            <input
              className="search"
              type="search"
              placeholder="Sesrch here..."
              name="q"
              onChange={(event) => setValue(event.target.value)}
            />
            <button
              className='submit-search'
              type='submit'
            />
          </form>
        </div>
        <div className="container-second">
          <div className="left-step-second-inro"></div>
          <div className="container-projects" id="cont-prj">
            {filterredProjects.map((project, index) => (
              <div className="child-projects" key={index}>
                <div>
                  <img className="icons" src={project.img} />
                </div>
                <div>
                  <p className="name-project">{project.name}</p>
                  <p>{project.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Projects