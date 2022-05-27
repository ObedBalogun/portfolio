import React from 'react';
import {useLocation} from "react-router-dom";
import {TopNav} from "../components/Navbar";
import {motion} from 'framer-motion';
import Services from "../components/Services";
import Experience from "../components/Experience";
import {useEffect} from "react";

const AboutPage = ({portrait,navOpen}) => {
    let location = useLocation();
    let prevLocation = location.state ? location.state.from : {pathname: '/about'}
    location = location.pathname;
    location = location === "/" || location === "/contact";
    const transition = {
        // duration: 0.19,
        type: "tween",
        duration: 0.3,
            stiffness: 1000,
            ease: [0.1, 0.13, 0.23, 0.96]
    };
    const variants = {
        hidden: {
            // opacity: 0,
            x: prevLocation !== '/projects' && prevLocation !== '/'  ? '-70vw' : '70vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition
        },
        exit: {
            // opacity: 0,
            x: prevLocation !== '/projects' && prevLocation !== '/'  ? '70vw' : '-70vw',
            transition
        }
    }
    useEffect(() => {
        navOpen('openNav')
    }, [])
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <div className="relative overflow-hidden background bg-white">
                <TopNav/>
                <div className="colored-background">
                    <span className={`green ${location ? 'animate' : ''}`}/>
                    <span className={`blue ${location ? 'animate' : ''}`}/>
                </div>
                <div className="about-heading flex mt-32 px-6">
                        <span className="text-5xl z-20 font-semibold w-9/12 leading-tight">
                        Hey! Obed Balogun here. <br/>
                        I’m a software developer based in Ibadan, Nigeria. Currently,
                        at Crop2Cash, an Agri-Tech that provides digital financial services for farmers
                    </span>
                </div>
                <div className="about-image flex px-8 justify-end mt-12">
                    <img src={portrait} className="w-10/12 h-full z-20" alt="portrait"/>
                </div>
                <div className="about-content flex flex-row gap-4 text-white px-10 mt-24">
                    <div
                        className=" z-20 font-semibold text-black text-2xl leading-10 w-10/12">
                        In addition to software engineering, I also have an interest in Machine Learning.
                        I enjoy the idea of analyzing and generating useful insights from data. I have developed an RNN
                        model for flood susceptibility prediction based on weather and land use data.
                    </div>
                    <div
                        className="z-20 font-semibold text-black text-2xl leading-10 w-10/12">
                        Skilled in Python, Django, JavaScript, NodeJS, ReactJS, TailwindCSS, Bootstrap, Postgresql,
                        MYSQL, GIT and AWS
                    </div>
                </div>
                <div className="services mt-20 px-6">
                    <Services/>
                </div>
                <div className="work-experience my-48 px-6">
                    <Experience/>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
