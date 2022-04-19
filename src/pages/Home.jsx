import React from 'react';
import logo from '../black-logo.png';
import {Link} from "react-router-dom";
import {TopNav} from "../components/Navbar";

const Home = () => {
    return (
        <div className="container relative h-screen w-screen overflow-hidden">
            <div className="background">
                <span className="green"/>
                <span className="blue "/>
                <TopNav/>
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


        </div>
    );
};

export default Home;
