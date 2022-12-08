import React from "react"
import "./Header.css"
import { Link, Routes, Route} from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="container">
                <img src="/images/2560px-BBC_logo_white.png" className="logo"></img>
                <button className="signin-btn"><i className="fa fa-solid fa-user"></i>Sign in</button>
                <ul className="menu">
                	<li className="menu-item"><Link to="/">Home</Link></li>
                    <li className="menu-item bg-red"><Link to="/news">News</Link></li>
                    <li className="menu-item bg-yellow"><Link to="/sport">Sport</Link></li>
                    <li><input type="text" className="search" placeholder="&#xF002; Search BBC" style={{fontFamily:"Arial, FontAwesome"}}></input></li>
                </ul>
            </div>
        </header>
    )
}

export default Header