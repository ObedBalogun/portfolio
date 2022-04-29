import React from 'react';
import {useLocation} from "react-router-dom";
import {TopNav} from "../components/Navbar";
import portrait from "../potrait.png"
import Animate from "../components/AnimatePage";
import Services from "../components/Services";

const AboutPage = () => {
    let location = useLocation()
    location = location.pathname;
    location = location === "/" || location === "/contact";
    console.log(location);
    return (
        <>
            <div className="container relative overflow-hidden background bg-white">
                <TopNav/>
                <div className="colored-background">
                    <span className={`green ${location ? 'animate' : ''}`}/>
                    <span className={`blue ${location ? 'animate' : ''}`}/>
                </div>
                    <div className="about-heading flex mt-32 px-6">
                        <span className="text-5xl z-20 font-semibold w-9/12 leading-tight">
                        Hey Obed Balogun here. <br/>
                        I’m a software developer based in Ibadan, Nigeria. Currently,
                        at Crop2Cash, an Agri-Tech that provides digital financial services for farmers
                    </span>
                    </div>
                    <div className="about-image flex px-8 justify-end mt-12">
                        <img src={portrait} className="w-10/12 h-full z-20" alt="portrait"/>
                    </div>
                    <div className="about-content flex flex-row gap-4 text-white px-10 mt-24">
                        <div
                            className="basis-1/2 left-side-text z-20 font-semibold text-black text-2xl leading-tight w-11/12">
                        <span className="">In addition to software engineering, I also have an interest in Machine Learning.
                        I enjoy the idea of analyzing and generating useful insights from data. I have developed an RNN
                            model for flood susceptibility prediction based on weather and land use data.</span>
                        </div>
                        <div
                            className="basis-1/2 right-side-text z-20 font-semibold text-black text-2xl leading-tight">
                            Skilled in Python, Django, JavaScript, NodeJS, ReactJS, TailwindCSS, Bootstrap, Postgresql,
                            MYSQL, GIT and AWS
                        </div>
                    </div>
                <div className="services mt-20 px-6">
                    <Services/>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
