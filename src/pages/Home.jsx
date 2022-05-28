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
            <div className="background">
                <span className={`green ${location ? 'animate' : ''}`}/>
                <span className={`blue ${location ? 'animate' : ''}`}/>
            </div>
            <div className="homepage-headers flex justify-center items-center w-screen h-screen">
                <div className="main-header mt-12 md:mt-0">
                    Hi, I’m Obed Balogun <br/>
                    a software developer.
                </div>
                <div className="main-sub-header mt-24 md:mt-0">
                    I build scalable and reliable web applications
                    from stable backend to frontend designs that work.
                </div>
            </div>

        </motion.div>
    );
};

export default Home;
