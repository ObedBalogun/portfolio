import React from 'react';
import logo from '../black-logo.png';
import {Link, useLocation} from "react-router-dom";
import {TopNav} from "../components/Navbar";
import Noise from "../Noise.png"

const Home = () => {
    let location = useLocation()
    location = location.pathname;
    location = location === "/" || location === "/about";
    return (
        <div className="container relative h-screen w-screen overflow-hidden">
            <TopNav/>
            <div className="background">
                <span className={`green ${location ? 'animate' : ''}`}/>
                <span className={`blue ${location ? 'animate' : ''}`}/>
            </div>
            <div className="homepage-headers flex justify-center items-center">
                <div className="main-header">
                    Hi, I’m Obed Balogun <br/>
                    a software developer.
                </div>
                <div className="main-sub-header">
                    I build scalable and reliable web applications
                    from stable backend to frontend designs that work.
                </div>
            </div>

        </div>
    );
};

export default Home;
