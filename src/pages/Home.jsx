import React from 'react';
import logo from '../black-logo.png';
import {Link, useLocation} from "react-router-dom";
import {TopNav} from "../components/Navbar";
import Noise from "../Noise.png"
import {motion} from 'framer-motion';


const Home = () => {
    let location = useLocation();
    console.log(location.state.from)
    location = location.pathname;
    location = location === "/" || location === "/about";
    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                // delay: 0,
                duration: .5,
                // type: 'spring',
                // stiffness: 50
            }
        },
        exit: {
            opacity: 0
        }
    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="container relative h-screen w-screen
            overflow-hidden bg-white">
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

        </motion.div>
    );
};

export default Home;
