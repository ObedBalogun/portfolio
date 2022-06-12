import React, {useState} from 'react';
import {motion} from "framer-motion";
import c2c from "../images/c2c.png";
import tempo from "../images/tempo.png";
import goodchat from "../images/good-chat.png";
import selorm from "../images/selorm.png";
import {useEffect} from "react";

const Experience = () => {
        const [isActive, setIsActive] = useState(0);
        const [width, setWidth] = useState(window.innerWidth);

        const transition = {
            duration: 0.3,
            type: "tween",
        }

        const slideOut = {
            hidden: {
                x: 200,
                opacity: 0
            },
            hover: {
                x: 800,
                opacity: 1,
                transition
            },
        }


        const handleHover = (cardId) => {
            setIsActive(cardId);
        }
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

        return (
            <div className="experience-container">
                <div className="relative mb-5 md:mb-16 text-2xl md:text-6xl font-semibold">
                    Work Experience
                </div>
                <div className="experience-content">
                    <hr className="relative solid border-gray-500"/>
                    <div className="flex flex-col md:flex-row justify-between py-8 relative"
                         onMouseEnter={() => handleHover(1)}
                         onMouseLeave={() => setIsActive(0)}>
                        <motion.img src={c2c} alt=""
                                    initial={"hidden"}
                                    animate={isActive === 1 && width >= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOut}
                                    className="absolute w-48 h-48 z-40 -top-12 pointer-events-none"/>
                        <div className="relative md:flex-1 md:text-2xl font-semibold text-black">
                            AUGUST 2021 - PRESENT
                        </div>
                        <div className="md:flex-1 relative md:text-2xl font-semibold text-black mt-5 md:mt-0">
                            Crop2Cash
                        </div>
                        <div className="md:flex-1 relative md:text-2xl font-semibold text-black">
                            Software Engineer
                        </div>

                    </div>
                    <hr className="relative solid border-gray-500"/>
                    <div className="flex flex-col md:flex-row justify-between py-8 relative"
                         onMouseEnter={() => handleHover(2)}
                         onMouseLeave={() => setIsActive(0)}>
                        <motion.img src={goodchat} alt=""
                                    initial={"hidden"}
                                    animate={isActive === 2 && width >= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOut}
                                    className="absolute w-48 h-48 z-40 -top-12 pointer-events-none"/>
                        <div className="relative md:flex-1 md:text-2xl font-semibold text-black">
                            DECEMBER 2020 - PRESENT
                        </div>
                        <div className="md:flex-1 relative md:text-2xl font-semibold text-black mt-5 md:mt-0">
                            GOOD CHAT
                        </div>
                        <div className="md:flex-1 relative md:text-2xl font-semibold text-black">
                            Software Developer
                        </div>
                    </div>
                    <hr className="relative solid border-gray-500"/>
                    <div className="flex flex-col md:flex-row justify-between py-8 relative"
                         onMouseEnter={() => handleHover(3)}
                         onMouseLeave={() => setIsActive(0)}>
                        <motion.img src={selorm} alt=""
                                    initial={"hidden"}
                                    animate={isActive === 3 && width >= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOut}
                                    className="absolute w-48 h-48 z-40 -top-12 pointer-events-none"/>
                        <div className="relative md:flex-1 md:text-2xl font-semibold text-black">
                            FEBRUARY 2020 - NOVEMBER 2020
                        </div>
                        <div className="md:flex-1 relative md:text-2xl font-semibold text-black mt-5 md:mt-0">
                            SELORM NIGERIA
                        </div>
                        <div className="md:flex-1 relative md:text-2xl font-semibold text-black">
                            Software Developer
                        </div>
                    </div>
                    <hr className="relative solid border-gray-500"/>
                    <div className="flex flex-col md:flex-row justify-between py-8 relative"
                         onMouseEnter={() => handleHover(4)}
                         onMouseLeave={() => setIsActive(0)}>
                        <motion.img src={tempo} alt=""
                                    initial={"hidden"}
                                    animate={isActive === 4 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOut}
                                    className="absolute w-48 h-48 z-40 -top-12 pointer-events-none"/>
                        <div className="relative md:flex-1 md:text-2xl font-semibold text-black">
                            APRIL 2018 - MARCH 2019
                        </div>
                        <div className="md:flex-1 relative md:text-2xl font-semibold text-black mt-5 md:mt-0">
                            TEMPO PAPER, PULP AND <br/> PACKAGING LTD,
                        </div>
                        <div className="md:flex-1 relative md:text-2xl font-semibold text-black">
                            ICT Support
                        </div>
                    </div>
                    <hr className="relative solid border-gray-500"/>

                </div>
            </div>
        )
            ;
    }
;

export default Experience;
