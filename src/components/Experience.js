import React, {useState} from 'react';
import {motion} from "framer-motion";
import c2c from "../images/c2c.png";

const Experience = () => {
        const [isActive, setIsActive] = useState(0);
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

        return (
            <div className="experience-container">
                <div className="relative mb-20 text-6xl font-semibold">
                    Work Experience
                </div>
                <div className="experience-content">
                    <hr className="relative solid border-gray-500"/>
                    <div className="flex flex-row justify-between py-8 relative" onMouseEnter={() => handleHover(1)}
                         onMouseLeave={() => setIsActive(0)}>
                        <motion.img src={c2c} alt=""
                                    initial={"hidden"}
                                    animate={isActive === 1 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOut}
                                    className="absolute w-48 h-48 z-40 -top-12 pointer-events-none"/>
                        <div className="relative flex-1 text-2xl font-semibold text-black">
                            AUGUST 2021 - PRESENT
                        </div>
                        <div className="flex-1 relative text-2xl font-semibold text-black">
                            Crop2Cash
                        </div>
                        <div className="flex-1 relative text-2xl font-semibold text-black">
                            Software Engineer
                        </div>

                    </div>
                    <hr className="relative solid border-gray-500"/>
                    <div className="flex flex-row justify-between py-8 relative" onMouseEnter={() => handleHover(2)}
                         onMouseLeave={() => setIsActive(0)}>
                        <motion.img src={c2c} alt=""
                                    initial={"hidden"}
                                    animate={isActive === 2 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOut}
                                    className="absolute w-48 h-48 z-40 -top-12 pointer-events-none"/>
                        <div className="relative flex-1 text-2xl font-semibold text-black">
                            DECEMBER 2020 - PRESENT
                        </div>
                        <div className="flex-1 relative text-2xl font-semibold text-black">
                            GOOD CHAT
                        </div>
                        <div className="flex-1 relative text-2xl font-semibold text-black">
                            Software Developer
                        </div>
                    </div>
                    <hr className="relative solid border-gray-500"/>
                    <div className="flex flex-row justify-between py-8 relative" onMouseEnter={() => handleHover(3)}
                         onMouseLeave={() => setIsActive(0)}>
                        <motion.img src={c2c} alt=""
                                    initial={"hidden"}
                                    animate={isActive === 3 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOut}
                                    className="absolute w-48 h-48 z-40 -top-12 pointer-events-none"/>
                        <div className="relative flex-1 text-2xl font-semibold text-black">
                            FEBRUARY 2020 - NOVEMBER 2020
                        </div>
                        <div className="flex-1 relative text-2xl font-semibold text-black">
                            SELORM NIGERIA
                        </div>
                        <div className="flex-1 relative text-2xl font-semibold text-black">
                            Software Developer
                        </div>
                    </div>
                    <hr className="relative solid border-gray-500"/>
                    <div className="flex flex-row justify-between py-8 relative" onMouseEnter={() => handleHover(4)}
                         onMouseLeave={() => setIsActive(0)}>
                        <motion.img src={c2c} alt=""
                                    initial={"hidden"}
                                    animate={isActive === 4 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideOut}
                                    className="absolute w-48 h-48 z-40 -top-12 pointer-events-none"/>
                        <div className="relative flex-1 text-2xl font-semibold text-black">
                            APRIL 2018 - MARCH 2019
                        </div>
                        <div className="flex-1 relative text-2xl font-semibold text-black">
                            TEMPO PAPER, PULP AND <br/> PACKAGING LTD,
                        </div>
                        <div className="flex-1 relative text-2xl font-semibold text-black">
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
