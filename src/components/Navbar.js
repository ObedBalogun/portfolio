import React, {useState} from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import logo from "../black-logo.png";
import logo2 from "../white-logo.png";

const Navbar = () => {
    const [active, setActive] = useState(true);
    const {pathname} = useLocation()
    const handleActive = () => {
        setActive(!active);
    }
    return (
        <>
            <nav className="navbar fixed mx-auto inset-x-0 bottom-20 z-40">
                <NavLink to='/' state={{from: pathname}}
                         className="navbar-nav">
                    <div>
                        <span className="nav-item">Home</span>
                    </div>
                </NavLink>
                <NavLink to='/projects' state={{from: pathname}}
                         className="navbar-nav">
                    <div>
                        <span className="nav-item">Projects</span>
                    </div>
                </NavLink>
                <NavLink to='/about' state={{from: pathname}}
                         className="navbar-nav">
                    <div>
                        <span className="nav-item">About</span>
                    </div>
                </NavLink>
                <NavLink to="/contact" state={{from: pathname}}
                         className="navbar-nav">
                    <div>
                        <span className="nav-item">Contact</span>
                    </div>
                </NavLink>
            </nav>
        </>
    );
};
const TopNav = () => {
    let location = useLocation()
    location = location.pathname;
    location = location === "/" || location === "/about"
    return (
        <div className="top-nav flex justify-between items-center px-6 pt-12">
            <div className="nav-logo z-10">
                <Link to="/">
                    <img src={location ? logo : logo2} alt="" className="w-12 h-12"/>
                </Link>
            </div>
            <div className="download-resume z-10">
                <button className='download-resume-button'>Download Resume</button>
            </div>
        </div>

    )
}
export {Navbar, TopNav};
