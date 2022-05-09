import React, {useState} from 'react';
import {TopNav} from "../components/Navbar";
import {useLocation} from "react-router-dom";
import {motion} from 'framer-motion';


const ContactPage = () => {
        const [isActive, setIsActive] = useState(0);
        const [enlarge, setEnlarge] = useState(0)
        let location = useLocation();
        // let prevLocation = location.state.from
        location = location.pathname;
        location = location === "/" || location === "/contact";
        const transition = {
            duration: 0.3,
            type: "tween",
            stiffness: 1000,
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
                opacity: 0,
                x: '70vw',
                type: "tween",
                transition
            }
        }
        const slideOut = {
            hidden: {
                x: -200,
                opacity: 0
            },
            hover: {
                x: 250,
                opacity: 1,
                transition
            },
            exit: {
                x: -200,
                opacity: 0,
                transition
            }
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
        const zoom = {
            hover: {
                scale: 1.3
            }
        }
        const handleZoom = (linkId) => {
            setEnlarge(linkId);

        }


        return (
            <motion.div
                className="relative h-screen w-screen overflow-hidden background contact-background bg-black"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
            >
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
                        <div className="email-address relative" onMouseEnter={() => setIsActive(1)}
                             onMouseLeave={() => setIsActive(0)} onClick={ ()=> window.open('mailto:obedbalogun@gmail.com')}>
                            <h4>Email</h4>
                            <h3>obedbalogun@gmail.com</h3>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 1 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideOut}
                                className="email-animation pointer-events-none">
                                    <span className="email-icon flex flex-col items-center">
                                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M29.9698 1.4133L10.4048 7.9133C-2.7469 12.3116 -2.7469 19.4833 10.4048 23.86L16.2114 25.7883L18.1398 31.595C22.5164 44.7466 29.7098 44.7466 34.0864 31.595L40.6081 12.0516C43.5114 3.27664 38.7448 -1.5117 29.9698 1.4133ZM30.6631 13.07L22.4298 21.3466C22.1048 21.6716 21.6931 21.8233 21.2814 21.8233C20.8698 21.8233 20.4581 21.6716 20.1331 21.3466C19.5048 20.7183 19.5048 19.6783 20.1331 19.05L28.3664 10.7733C28.9948 10.145 30.0348 10.145 30.6631 10.7733C31.2914 11.4016 31.2914 12.4416 30.6631 13.07Z"
                                                fill="white"/>
                                        </svg>
                                        <span className='p-4 flex-wrap icon-text text-center'>Send an <br/>email</span>

                                    </span>
                            </motion.div>
                        </div>
                        <div className='phone-number  md:mt-14 relative'
                             onMouseEnter={() => setIsActive(2)}
                             onMouseLeave={() => setIsActive(0)}
                        >
                            <div className="content">
                                <h4>Phone</h4>
                                <a href="tel:+2347067417382"><h3>+234 706 741 7382</h3></a>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === 2 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOutVariant}
                                    className="phone-animation pointer-events-none">
                                    <span className="phone-icon flex flex-col items-center">
                                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.1798 28.6542L17.634 32.2C16.8865 32.9475 15.6981 32.9475 14.9315 32.2192C14.7207 32.0084 14.5098 31.8167 14.299 31.6059C12.3248 29.6125 10.5423 27.5234 8.95148 25.3384C7.37982 23.1534 6.11482 20.9684 5.19482 18.8025C4.29398 16.6175 3.83398 14.5284 3.83398 12.535C3.83398 11.2317 4.06398 9.98587 4.52398 8.83587C4.98398 7.66671 5.71232 6.59337 6.72815 5.63504C7.95482 4.42754 9.29648 3.83337 10.7148 3.83337C11.2515 3.83337 11.7882 3.94837 12.2673 4.17837C12.7657 4.40837 13.2065 4.75337 13.5515 5.25171L17.9982 11.5192C18.3432 11.9984 18.5923 12.4392 18.7648 12.8609C18.9373 13.2634 19.0332 13.6659 19.0332 14.03C19.0332 14.49 18.899 14.95 18.6307 15.3909C18.3815 15.8317 18.0173 16.2917 17.5573 16.7517L16.1006 18.2659C15.8898 18.4767 15.794 18.7259 15.794 19.0325C15.794 19.1859 15.8132 19.32 15.8515 19.4734C15.909 19.6267 15.9665 19.7417 16.0048 19.8567C16.3498 20.4892 16.944 21.3134 17.7873 22.31C18.6498 23.3067 19.5698 24.3225 20.5665 25.3384C20.7581 25.53 20.969 25.7217 21.1606 25.9134C21.9273 26.6609 21.9465 27.8875 21.1798 28.6542Z"
                                                fill="white"/>
                                            <path
                                                d="M42.1096 35.1325C42.1096 35.6692 42.0137 36.225 41.8221 36.7617C41.7646 36.915 41.7071 37.0684 41.6304 37.2217C41.3046 37.9117 40.8829 38.5634 40.3271 39.1767C39.3879 40.2117 38.3529 40.9592 37.1837 41.4384C37.1646 41.4384 37.1454 41.4575 37.1262 41.4575C35.9954 41.9175 34.7687 42.1667 33.4462 42.1667C31.4912 42.1667 29.4021 41.7067 27.1979 40.7675C24.9937 39.8284 22.7896 38.5634 20.6046 36.9725C19.8571 36.4167 19.1096 35.8609 18.4004 35.2667L24.6679 28.9992C25.2046 29.4017 25.6837 29.7084 26.0862 29.9192C26.1821 29.9575 26.2971 30.015 26.4312 30.0725C26.5846 30.13 26.7379 30.1492 26.9104 30.1492C27.2362 30.1492 27.4854 30.0342 27.6962 29.8234L29.1529 28.3859C29.6321 27.9067 30.0921 27.5425 30.5329 27.3125C30.9737 27.0442 31.4146 26.91 31.8937 26.91C32.2579 26.91 32.6412 26.9867 33.0629 27.1592C33.4846 27.3317 33.9254 27.5809 34.4046 27.9067L40.7487 32.4109C41.2471 32.7559 41.5921 33.1584 41.8029 33.6375C41.9946 34.1167 42.1096 34.5959 42.1096 35.1325Z"
                                                fill="white"/>
                                        </svg>


                                        <span className='p-3  flex-wrap icon-text text-center'>Call Me</span>

                                    </span>
                                </motion.div>
                            </div>
                        </div>
                        <div className="links flex md:mt-20">
                            {/*<Link to="/">*/}
                            {/*<motion.h4*/}
                            {/*    initial={false}*/}
                            {/*    animate={enlarge === 1 ? "hover" : " "}*/}
                            {/*    variants={zoom}*/}
                            {/*    className="underline underline-offset-8 mr-16"*/}
                            {/*    onMouseEnter={() => handleZoom(1)}*/}
                            {/*    onMouseLeave={() => handleZoom(0)}>Twitter*/}
                            {/*</motion.h4>*/}
                            {/*</Link>*/}
                            <a href="https://www.linkedin.com/in/obedbalogun/" target="_blank" rel="noreferrer">
                                <motion.h4
                                    initial={false}
                                    animate={enlarge === 2 ? "hover" : ""}
                                    variants={zoom}
                                    className="underline underline-offset-8 mr-16"
                                    onMouseEnter={() => handleZoom(2)}
                                    onMouseLeave={() => handleZoom(0)}>Linkedin
                                </motion.h4>
                            </a>
                            <a href="https://www.instagram.com/brotherbalogun/" target="_blank" rel="noreferrer">
                                <motion.h4
                                    initial={false}
                                    animate={enlarge === 3 ? "hover" : " "}
                                    variants={zoom}
                                    className="underline underline-offset-8 mr-16"
                                    onMouseEnter={() => handleZoom(3)}
                                    onMouseLeave={() => handleZoom(0)}>Instagram
                                </motion.h4>
                            </a>
                            <a href="https://github.com/obedbalogun" target="_blank" rel="noreferrer">
                                <motion.h4
                                    initial={false}
                                    animate={enlarge === 4 ? "hover" : " "}
                                    variants={zoom}
                                    className="underline underline-offset-8"
                                    onMouseEnter={() => handleZoom(4)}
                                    onMouseLeave={() => handleZoom(0)}>Github
                                </motion.h4>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
;

export default ContactPage;
