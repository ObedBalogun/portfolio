import React, {useState} from 'react';
import {TopNav} from "../components/Navbar";
import {useLocation} from "react-router-dom";
import {motion} from 'framer-motion';
import Projects from "../components/Projects";

const ProjectsPage = () => {
    let location = useLocation()
    let prevLocation = location.state.from
    location = location.pathname;
    location = location === "/" || location === "/about";
    const transition = {
            duration: 0.4,
            stiffness: 500,
            ease: [0.1, 0.13, 0.23, 0.96]
        };
    const variants = {
        hidden: {
            opacity: 0,
            x: prevLocation !== '/' ? '-100vw' : '70vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition
        },
        exit: {
            x: '-150vw'
        }
    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <div className="container relative h-full w-screen overflow-hidden project-background bg-black">
                <TopNav/>
                <div className="colored-background">
                    <span className={`green ${location ? 'animate' : ''}`}/>
                    <span className={`blue ${location ? 'animate' : ''}`}/>
                </div>
                <div className="page-title text-center text-white mt-10">
                    <h1 className="relative">Projects</h1>
                </div>
                <div className="projects">
                    <Projects/>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;
