import React from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import logo from "../black-logo.png";
import logo2 from "../white-logo.png";

const Navbar = () => {
    const {pathname} = useLocation()
    return (
        <>

            <nav className="navbar flex flex-row bg-white/[0.75] md:w-2/6 py-3 md:py-2 items-center fixed
            mx-auto inset-x-0 bottom-14 md:bottom-20 z-10 justify-between">
                <div className="flex mx-auto ">
                    <NavLink to='/' state={{from: pathname}}
                             className="navbar-nav">
                        <div>
                            <span className="nav-item px-1">Home</span>
                        </div>
                    </NavLink>
                    <NavLink to='/projects' state={{from: pathname}}
                             className="navbar-nav">
                        <div>
                            <span className="nav-item px-1">Projects</span>
                        </div>
                    </NavLink>
                    <NavLink to='/about' state={{from: pathname}}
                             className="navbar-nav">
                        <div>
                            <span className="nav-item px-1">About</span>
                        </div>
                    </NavLink>
                    <NavLink to="/contact" state={{from: pathname}}
                             className="navbar-nav">
                        <div>
                            <span className="nav-item px-1">Contact</span>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    );
};
const TopNav = () => {
    let location = useLocation()
    location = location.pathname;
    location = location === "/" || location === "/about"
    return (
        <div className="top-nav flex px-6 items-center md:px-6 pt-12 z-40 relative justify-between">
            <div className="nav-logo z-10">
                <Link to="/">
                    <img src={location ? logo : logo2} alt="" className="w-8 h-8 md:w-12 md:h-12"/>
                </Link>
            </div>
            <div className="download-resume z-10">
                <Link to='/CV/Obed%20Balogun%20Resume.pdf' target="_blank" download
                      className='download-resume-button pl-2 text-sm md:text-base'>Download Resume</Link>
            </div>
        </div>

    )
}
export {Navbar, TopNav};
