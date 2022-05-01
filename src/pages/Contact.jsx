import React, {useState} from 'react';
import {TopNav} from "../components/Navbar";
import {useLocation} from "react-router-dom";
import {motion} from 'framer-motion';


const ContactPage = () => {
        const [isActive, setIsActive] = useState(0);
        let location = useLocation();
        let prevLocation = location.state.from
        location = location.pathname;
        location = location === "/" || location === "/contact";
        const transition = {
            duration: 0.3,
            type: "tween",
            // stiffness: 500,
            // ease: [0.1, 0.13, 0.23, 0.96]
        };
        const variants = {
            hidden: {
                opacity: 1,
                x: '70vw'
            },
            visible: {
                opacity: 1,
                x: 0,
                transition

            },
            exit: {
                x: '-20vw',
            }
        }
        const slideOut = {
            hidden: {
                x: '-20vw',
                opacity: 0
            },
            hover: {
                x: 250,
                opacity: 1,
                transition
            },
        }
        const slideOutVariant = {
            hidden: {
                x: '-10vw',
                opacity: 0
            },
            hover: {
                x: 300,
                opacity: 1,
                transition
            },
        }
        const handleHover = (cardId) => {
            setIsActive(cardId);
        }


        return (
            <motion.div
                className="container relative h-screen w-screen overflow-hidden background contact-background bg-black"
                variants={variants}

                initial="hidden" animate="visible" exit="exit">
                <TopNav/>
                <div className="colored-background">
                    <span className={`green ${location ? 'animate' : ''}`}/>
                    <span className={`blue ${location ? 'animate' : ''}`}/>
                </div>
                <div className="grid grid-flow-col gap-4 text-white px-8 mt-24">
                    <div className="col-span-6 left-side-text z-20 w-11/12 font-semibold text-5xl leading-tight ">
                        Have an idea or a concept that really excites you? What do you say? Let’s make magic
                        together.
                    </div>
                    <div className="col-span-6 right-side-text z-20">
                        <div className="email-address relative" onMouseEnter={() => handleHover(1)}
                             onMouseLeave={() => setIsActive(0)}>
                            <h4>Email</h4>
                            <h3>obedbalogun@gmail.com</h3>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 1 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideOut}
                                className="email-animation">
                                    <span className="email-icon flex flex-col items-center">
                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M29.9698 1.4133L10.4048 7.9133C-2.7469 12.3116 -2.7469 19.4833 10.4048 23.86L16.2114 25.7883L18.1398 31.595C22.5164 44.7466 29.7098 44.7466 34.0864 31.595L40.6081 12.0516C43.5114 3.27664 38.7448 -1.5117 29.9698 1.4133ZM30.6631 13.07L22.4298 21.3466C22.1048 21.6716 21.6931 21.8233 21.2814 21.8233C20.8698 21.8233 20.4581 21.6716 20.1331 21.3466C19.5048 20.7183 19.5048 19.6783 20.1331 19.05L28.3664 10.7733C28.9948 10.145 30.0348 10.145 30.6631 10.7733C31.2914 11.4016 31.2914 12.4416 30.6631 13.07Z"
                                                fill="white"/>
                                        </svg>
                                        <span className='p-4 w-34 flex-wrap email-text text-center'>Send an email</span>

                                    </span>
                            </motion.div>
                        </div>
                        <div className='phone-number  md:mt-14 relative'
                             onMouseEnter={() => handleHover(2)}
                             onMouseLeave={() => setIsActive(0)}
                        >
                            <h4>Phone</h4>
                            <h3>+234 706 741 7382</h3>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 2 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideOutVariant}
                                className="phone-animation">
                                    <span className="phone-icon flex flex-col items-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
                                                fill="#FFFFFF"/>
                                            <path
                                                d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
                                                fill="#FFFFFF"/>
                                        </svg>

                                        <span className='p-4 w-34 flex-wrap email-text text-center'>Call me</span>

                                    </span>
                            </motion.div>

                        </div>
                        <div className="links flex md:mt-20">
                            <h4 className="underline underline-offset-8 mr-16">Twitter</h4>
                            <h4 className="underline underline-offset-8 mr-16">Linkedin</h4>
                            <h4 className="underline underline-offset-8">Instagram</h4>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
;

export default ContactPage;
