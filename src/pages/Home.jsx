import React from 'react';
import {useLocation} from "react-router-dom";
import {TopNav} from "../components/Navbar";
import {motion} from 'framer-motion';
import {useEffect} from "react";


const Home = ({navOpen}) => {
    let location = useLocation();
    location = location.pathname;
    location = location === "/" || location === "/about";
    const variants =    {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .5,
            }
        },
        exit: {
            opacity: 0
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
            exit="exit"
            className="relative h-screen w-screen
            overflow-hidden bg-white">
            <TopNav/>
            <div className="background overflow-hidden pointer-events-none">
                <span className={`green ${location ? 'animate' : ''}`}/>
                <span className={`blue ${location ? 'animate' : ''}`}/>
            </div>
            <div className="homepage-headers relative flex-col text-center mx-auto h-screen w-screen">
                <div className="main-header text-4xl md:text-6xl mt-32 md:mt-40 w-72 md:w-11/12 mx-auto ">
                    Hi, I’m Obed Balogun, <br/>
                    a software developer.
                </div>
                <div className="main-sub-header w-72 sm:w-96 md:text-2xl mx-auto my-4">
                    I build scalable and reliable web applications
                    from stable backend to frontend designs that work.
                </div>
            </div>

        </motion.div>
    );
};

export default Home;
