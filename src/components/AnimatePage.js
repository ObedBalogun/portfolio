import React from 'react';
import {motion} from 'framer-motion';
const animations = {
    initial: {
        opacity: 0,
        x: 800,
    },
    animate: {
        opacity: [0, 0.8, 1],
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: { duration: 0.6 },
    },

}

const transition = {
        duration: 0.5,
                    ease: [0.6, 0.05, -0.01, 0.9],

        // ease: [0.43, 0.13, 0.23, 0.96]
    };
    const variants = {
        exit: {x: "100%", opacity: 0, transition},
        enter: {
            x: "0%",
            opacity: 1,
            transition
        }
    };
const Animate = ({children}) => {
    return (
        <motion.div
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit">
            {children}
        </motion.div>
    );
};

export default Animate;
