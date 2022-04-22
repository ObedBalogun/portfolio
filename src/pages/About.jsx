import React from 'react';
import {useLocation} from "react-router-dom";
import {TopNav} from "../components/Navbar";
import portrait from "../potrait.png"

const AboutPage = () => {
    let location = useLocation()
    location = location.pathname;
    location = location === "/" || location === "/contact";
    console.log(location);
    return (
        <>
            <div className="container relative h-100 w-100 overflow-hidden background">
                <TopNav/>
                <div className="backgroundd">
                    <span className={`green ${location ? 'animate' : ''}`}/>
                    <span className={`blue ${location ? 'animate' : ''}`}/>
                </div>
                <div className="about-heading flex mt-32 px-6">
                    <span className="flex-auto z-20">
                        Hey Obed Balogun here. <br/>
                        I’m a software developer based in Ibadan, Nigeria. Currently,
                        at Crop2Cash, an Agri-Tech that provides digital financial services for farmers
                    </span>
                </div>
                <div className="about-image flex place-self-end">
                    <img src={portrait} className="w-3/4 h-full z-20" alt="portrait"/>
                </div>
                <div className="about-content grid grid-flow-col gap-4 text-white px-8 mt-24">
                    <div className="col-span-6 left-side-text z-20">
                        In addition to software engineering, I also have an interest in Machine Learning.
                        I enjoy the idea of analyzing and generating useful insights from data. I have developed an RNN
                        model for flood susceptibility prediction based on weather and land use data.
                    </div>
                    <div className="col-span-6 right-side-text z-20">
                        Skilled in Python, Django, JavaScript, NodeJS, ReactJS, TailwindCSS, Bootstrap, Postgresql,
                        MYSQL, GIT and AWS
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
