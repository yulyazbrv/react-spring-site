import React, { useState } from 'react';
import './Main.css';

export const Main = (props) => {
  const { projects } = props;

  return (
    <div>
      <FirstIntro />
      <SecondIntro projects={projects} />
      <ThirdIntro />
      <FourthIntro />
    </div>
  );
};

const FirstIntro = () => {
  return (
    <div className="first-intro">
      <div className="container">
        <div>
          <p className="first-intro-title">Projects</p>
          <p className="first-intro-about">
            From configuration to security, web apps to big data—whatever the infrastructure needs of your application
            may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is
            modular by design.
          </p>
        </div>
      </div>
    </div>
  );
};

const SecondIntro = (props) => {
  const { projects } = props;
  const [value, setValue] = useState('');

  const filterredProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="second-intro">
      <div>
        <input
          className="search"
          type="search"
          placeholder="SEARCH"
          name="q"
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="container-second">
        <div className="left-step-second-inro"></div>
        <div className="container-projects" id="cont-prj">
          {filterredProjects.map((project) => (
            <div className="child-projects">
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
};

const ThirdIntro = () => {
  return (
    <div className="third-intro">
      <div className="container-third">
        <p className="attic-projects">Projects in the Attic</p>
        <div className="container-spec-projects">
          <div className="child-spec-projects">
            <p className="name-project">Spring IO Platform</p>
            <p>
              Provides a cohesive, versioned platform for building modern applications. It is a modular,
              enterprise-grade distribution that delivers a curated set of dependencies.
            </p>
          </div>

          <div className="child-spec-projects">
            <p className="name-project">Spring For Android</p>
            <p>Provides key Spring components for use in developing Android applications.</p>
          </div>

          <div className="child-spec-projects">
            <p className="name-project">Spring flex</p>
            <p>
              A project to make it easier to build Spring-powered Rich Internet Applications using Adobe Flex as the
              front-end client.
            </p>
          </div>

          <div className="child-spec-projects">
            <p className="name-project">Spring Integratoin Groovy DSL</p>
            <p>A Groovy based DSL for developing Spring Integration applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FourthIntro = () => {
  return (
    <div className="fourth-intro">
      <div className="container-fourth">
        <div className="container-gets">
          <div className="child-gets">
            <p className="get-news">Get ahead</p>
            <p>VMware offers training and certification to turbo-charge your progress.</p>
            <a href="">Learn more</a>
          </div>
          <div className="child-gets">
            <p className="get-news">Get support</p>
            <p>
              Spring Runtime offers support and binaries for OpenJDK™, Spring, and Apache Tomcat® in one simple
              subscription.
            </p>
            <a href="">Learn more</a>
          </div>
          <div className="child-gets">
            <p className="get-news">Upcoming events</p>
            <p>Check out all the upcoming events in the Spring community.</p>
            <a href="">View all</a>
          </div>
        </div>
      </div>
    </div>
  );
};
