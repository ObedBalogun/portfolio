import React from 'react';
import {TopNav} from "../components/Navbar";
import {useLocation} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion';
import Projects from "../components/Projects";
import {useEffect} from "react";

const ProjectsPage = ({navOpen,preLoadedImages,projects}) => {
    let location = useLocation()
    let prevLocation = location.state ? location.state.from : {pathname: '/projects'}
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
            opacity: [0, 0.2, 0.5, 1],
            x: 0,
            transition
        },
        exit: {
            x: prevLocation !== '/' ? '70vw' : '-150vw'

            // x: '-150vw'
        }
    }
    useEffect(() => {
        navOpen('openNav')
    }, [])

    return (
        <AnimatePresence>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit">
                <div
                    className="project-container h-screen w-screen overflow-x-hidden overflow-y-auto project-background bg-black">
                    <TopNav/>
                    <div className="colored-background pointer-events-none">
                        <span className={`green ${location ? 'animate' : ''}`}/> 
                        <span className={`blue ${location ? 'animate' : ''}`}/>
                    </div>
                    <div className="page-title text-center text-white mt-20 md:mt-10">
                        <span className="relative text-5xl lg:text-7xl font-bold">Projects</span>
                    </div>
                    <div className="projects">
                        <Projects preLoadedImages={preLoadedImages} projects={projects}/>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectsPage;
