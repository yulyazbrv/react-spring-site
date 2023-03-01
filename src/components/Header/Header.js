import React, { useState } from 'react';
import springLogo from '../../images/spring-logo.svg';
import menu from '../../images/menu.png';
import arrowDown from '../../images/arrow-down.png';
import './Header.css';

export const Header = (props) => {
  const { firstMenu, secondMenu, thirdMenu } = props;
  const [tabIndex, setTabIndex] = useState(0);
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
                            tabIndex === 1 ? setTabIndex(0) : setTabIndex(1);
                          }}
                        />
                      </div>
                    </div>
                    <div className="first-mobile-hidden-menu">
                      {tabIndex === 1
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
                            tabIndex === 2 ? setTabIndex(0) : setTabIndex(2);
                          }}
                        />
                      </div>
                    </div>
                    <div className="second-mobile-hidden-menu">
                      {tabIndex === 2
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
                            tabIndex === 3 ? setTabIndex(0) : setTabIndex(3);
                          }}
                        />
                      </div>
                    </div>
                    <div className="third-mobile-hidden-menu">
                      {tabIndex === 3
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
              <div className="nav-with-hidden1">
                <div className="nav-link">Why Spring</div>
                <div className="hidden-menu" id="hidmen1">
                  {firstMenu.map((item) => (
                    <ul>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="nav-with-hidden2">
                <div className="nav-link">Learn</div>
                <div className="hidden-menu" id="hidmen2">
                  {secondMenu.map((item) => (
                    <ul>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="nav-with-hidden3">
                <div className="nav-link">Projects</div>
                <div className="hidden-menu" id="hidmen3">
                  {thirdMenu.map((item) => (
                    <ul>
                      <li>{item.name}</li>
                    </ul>
                  ))}
                </div>
              </div>

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
