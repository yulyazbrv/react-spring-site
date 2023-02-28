import React, { useState } from 'react'
import springLogo from '../../images/spring-logo.svg'
import menu from "../../images/menu.png"
import "./Header.css"

export const Header = (props) => {
    const {FirstHiddenMenu, SecondHiddenMenu, ThirdHiddenMenu} = props
    //const [value, setValue] = useState('');

    return (  
        <div>
            <div className="under-intro">
		        <p className="welcome-text">Hear from the Spring team this January at Spring one.&rsaquo;</p>
	        </div>    
            <header className="header">
                <div className="container">
                    <div className="header-inner">

                        <img className="main-logo" src={springLogo} />

                        <img className="icon-adaptive-menu" src={menu}  />

                        <nav className="nav">
                            <div className="nav-link1" onMouseOver={FirstHiddenMenu}>Why Spring</div>
                            <div className="hidden-menu1" id="hidmen1" >

                            </div>
                            <div className="nav-link2" onMouseOver={SecondHiddenMenu}>Learn</div>
                            <div className="hidden-menu2" id="hidmen2" >

                            </div>
                            <div className="nav-link3" onMouseOver={ThirdHiddenMenu}>Projects</div>
                            <div className="hidden-menu3" id="hidmen3" >

                            </div>
                            <a className="nav-link" href="#">Training</a>
                            <a className="nav-link" href="#">Support</a>
                            <a className="nav-link" href="#">Community</a>
                        </nav>				
                    </div>
                </div>
            </header>
        </div>
    )
}

const FirstHiddenMenu = (props) => {
    const {firstMenu} = props

    return (
        firstMenu.map(item => 
            <ul>
                <li>${item.name}</li>
            </ul>).join("")
    )
}
const SecondHiddenMenu = (props) => {
    const {secondMenu} = props

    return (
        secondMenu.map(item => 
            <ul>
                <li>${item.name}</li>
            </ul>).join("")
    )
}
const ThirdHiddenMenu = (props) => {
    const {ThirdMenu} = props

    return (
        ThirdMenu.map(item => 
            <ul>
                <li>${item.name}</li>
            </ul>).join("")
    )
}