import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../black-logo.png";

const Navbar = () => {
    const [active, setActive] = React.useState(true);
    const handleActive = () => {
        setActive(!active);
    }
    return (
        <>
            <nav className="navbar fixed mx-auto inset-x-0 bottom-12 z-10">
                <NavLink to='/' className="navbar-nav">
                    <div>
                        <span className="nav-item">Home</span>
                    </div>
                </NavLink>
                <NavLink to='/projects' className="navbar-nav">
                    <div>
                        <span className="nav-item">Projects</span>
                    </div>
                </NavLink>
                <NavLink to='/about' className="navbar-nav">
                    <div>
                        <span className="nav-item">About</span>
                    </div>
                </NavLink>
                <NavLink to="/contact" className="navbar-nav">
                    <div>
                        <span className="nav-item">Contact</span>
                    </div>
                </NavLink>
            </nav>
        </>
    );
};
const TopNav = () => {
    return (
        <div className="top-nav flex justify-between items-center px-6 pt-12 -mt-10">
            <div className="nav-logo z-10">
                <Link to="/">
                    <img src={logo} alt="" className="w-36 h-36 -mr-12"/>
                </Link>
            </div>
            <div className="download-resume z-10">
                <button className='download-resume-button'>Download Resume</button>
            </div>
        </div>

    )
}
export {Navbar, TopNav};
