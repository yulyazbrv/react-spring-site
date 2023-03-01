import React, { useState } from 'react';
import springLogo from '../../images/spring-logo.svg';
import menu from '../../images/menu.png';
import arrowDown from '../../images/arrow-down.png';
import './Header.css';

export const Header = (props) => {
  const { firstMenu, secondMenu, thirdMenu } = props;
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div>
      <div className="under-intro">
        <p className="welcome-text">Hear from the Spring team this January at Spring one.&rsaquo;</p>
      </div>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <img className="main-logo" src={springLogo} />

            <img
              className="icon-adaptive-menu"
              src={menu}
              onClick={() => {
                setShowMobile(true);
              }}
            />
            {showMobile ? (
              <nav className="mobile-menu">
                <div
                  className="forCloseMobMenu"
                  onClick={() => {
                    setShowMobile(false);
                  }}
                >
                  <h1 className="icon-close">x</h1>
                </div>
                {showMobile ? (
                  <div className="container-mobile-menu">
                    <div className="item-menu">
                      <h1>Why Spring</h1>
                      <div className="open-hidden-menu1">
                        <img
                          className="arrow-icon"
                          src={arrowDown}
                          onClick={() => {
                            showFirst ? setShowFirst(false) : setShowFirst(true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="first-mobile-hidden-menu">
                      {showFirst
                        ? firstMenu.map((item) => (
                            <div>
                              <h2>{item.name}</h2>
                            </div>
                          ))
                        : null}
                    </div>
                    <div className="item-menu">
                      <h1>Learn</h1>
                      <div className="open-hidden-menu2">
                        <img
                          className="arrow-icon"
                          src={arrowDown}
                          onClick={() => {
                            showSecond ? setShowSecond(false) : setShowSecond(true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="second-mobile-hidden-menu">
                      {showSecond
                        ? secondMenu.map((item) => (
                            <div>
                              <h2>{item.name}</h2>
                            </div>
                          ))
                        : null}
                    </div>
                    <div className="item-menu">
                      <h1>Projects</h1>
                      <div className="open-hidden-menu3">
                        <img
                          className="arrow-icon"
                          src={arrowDown}
                          onClick={() => {
                            showThird ? setShowThird(false) : setShowThird(true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="third-mobile-hidden-menu">
                      {showThird
                        ? thirdMenu.map((item) => (
                            <div>
                              <h2>{item.name}</h2>
                            </div>
                          ))
                        : null}
                    </div>

                    <div className="item-menu">
                      <h1>Training</h1>
                    </div>

                    <div className="item-menu">
                      <h1>Support</h1>
                    </div>

                    <div className="item-menu">
                      <h1>Community</h1>
                    </div>
                  </div>
                ) : null}
              </nav>
            ) : null}
            <nav className="nav">
              <div
                className="nav-link1"
                onMouseOver={() => {
                  setShowFirst(true);
                }}
              >
                Why Spring
              </div>
              {showFirst ? (
                <div
                  className="hidden-menu1"
                  id="hidmen1"
                  onMouseLeave={() => {
                    setShowFirst(false);
                  }}
                >
                  {firstMenu.map((item) => (
                    <ul>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              ) : null}
              <div
                className="nav-link2"
                onMouseOver={() => {
                  setShowSecond(true);
                }}
              >
                Learn
              </div>
              {showSecond ? (
                <div
                  className="hidden-menu2"
                  id="hidmen2"
                  onMouseLeave={() => {
                    setShowSecond(false);
                  }}
                >
                  {secondMenu.map((item) => (
                    <ul>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              ) : null}
              <div
                className="nav-link3"
                onMouseOver={() => {
                  setShowThird(true);
                }}
              >
                Projects
              </div>
              {showThird ? (
                <div
                  className="hidden-menu3"
                  id="hidmen3"
                  onMouseLeave={() => {
                    setShowThird(false);
                  }}
                >
                  {thirdMenu.map((item) => (
                    <ul>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              ) : null}
              <a className="nav-link" href="#">
                Training
              </a>
              <a className="nav-link" href="#">
                Support
              </a>
              <a className="nav-link" href="#">
                Community
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
