import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import finag1 from "../images/finag-1.png"
import akmarv from "../images/akmarv-1.png"
import shyne from "../images/shyne.png"
import image from "../images/project.png"
import image2 from "../images/project-2.png"
import Modal from "./Project-Modal";


const Projects = () => {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(0);
    const handleHover = (cardId) => {
        setIsActive(cardId);
    }
    const handleModal = (cardNumber) => {
        setCardNumber(cardNumber);
        setShow(true)
    }
    const slideDown = {
        hidden: {
            opacity: 0,
            y: -50,

            transition: {
                y: 0,
                duration: .4,
            }
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3,
                type: "tween",
                stiffness: 100,
                // ease: 'easeInOut'
            }
        },
    }
    const slideUp = {
        hidden: {
            opacity: 0,
            y: 100,

            transition: {
                duration: .5,
                // ease: 'easeInOut'
            }
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3,
                type: "tween",
                stiffness: 100,
                // ease: 'easeInOut'
            }
        },
    }
    const toggleHide = {
        hidden: {
            opacity: 0,

            transition: {
                duration: .5,
                ease: 'easeInOut'
            }
        },
        hover: {
            opacity: 1,
            transition: {
                duration: .4,
                ease: 'easeInOut'
            }
        },
    }
    const zoom = {
        hidden: {
            scale: 1,
            transition: {
                duration: .5,
                ease: 'easeInOut'
            }
        },
        hover: {
            opacity: 0.55,
            scale: 1.1,
            transition: {
                duration: .4,
                ease: 'easeInOut'
            }
        },
    }
    const [cardNumber, setCardNumber] = useState(0);


    return (
        <>

            <div className="flex flex-column px-8 mt-32 relative">
                <div className="flex-1">
                    <div className="project-card text-white relative mb-5" onMouseEnter={() => handleHover(1)}
                         onMouseLeave={() => setIsActive(0)}>
                        <div className="card-background rounded-3xl bg-black overflow-hidden h-full">
                            <motion.img src={shyne} alt=""
                                        className={`w-full h-full object-cover`}
                                        initial={false}
                                        animate={isActive === 1 ? "hover" : "hidden"}
                                        variants={zoom}
                            />
                        </div>
                        <div className="card-content px-8 overflow-hidden absolute top-0">
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 1 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideDown}
                                className="flex technology-pills py-6">
                                <button className="mr-2">
                                    <span>Bootstrap</span>
                                </button>
                                <button className="mr-2">
                                    <span>Django</span>
                                </button>
                                <button>
                                    <span>React</span>
                                </button>
                            </motion.div>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 1 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={toggleHide}
                                className="flex view-button justify-center pt-64 pb-32">
                                <button className="flex text-white items-center py-2 px-6"
                                        onClick={() => handleModal(1)}>
                                    <span>View Project</span>
                                </button>
                            </motion.div>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 1 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideUp}
                                className="flex">
                                <div className="project-details">
                                    <div className="title">Shyne</div>
                                    <div className="content font-light text-2xl">
                                        Shyne is a platform that connects cleaning services to clients within their area
                                        who need a shyne.

                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="project-card text-white relative mt-10" onMouseEnter={() => handleHover(3)}
                         onMouseLeave={() => setIsActive(0)}>
                        <div className="card-background rounded-3xl bg-black overflow-hidden">
                            <motion.img src={image} alt=""
                                        initial={false}
                                        animate={isActive === 3 ? "hover" : "hidden"}
                                        variants={zoom}
                            />
                        </div>
                        <div className="card-content px-8 overflow-hidden absolute top-0">
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 3 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideDown}
                                className="flex technology-pills py-6">
                                <button className="mr-2">
                                    <span>Django</span>
                                </button>
                                <button className="mr-2">
                                    <span>React</span>
                                </button>
                                <button>
                                    <span>Postgresql</span>
                                </button>
                            </motion.div>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 3 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={toggleHide}
                                className="flex view-button justify-center pt-64 pb-32">
                                <button className="flex text-white items-center py-2 px-6"
                                        onClick={() => handleModal(3)}>
                                    <span>View Project</span>
                                </button>
                            </motion.div>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 3 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideUp}
                                className="flex">
                                <div className="project-details">
                                    <div className="title">Project Title</div>
                                    <div className="content font-light text-2xl">
                                        Project description and sha type a summary and make the space okay
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 mt-24 text-white relative">
                    <div className="project-card text-white relative" onMouseEnter={() => handleHover(2)}
                         onMouseLeave={() => setIsActive(0)}>
                        <div
                            className="card-background rounded-3xl bg-black overflow-hidden h-full w-full object-cover">
                            <motion.img src={akmarv} alt=""
                                        className="h-full w-full object-cover"
                                        initial={false}
                                        animate={isActive === 2 ? "hover" : "hidden"}
                                        variants={zoom}
                            />
                        </div>
                        <div className="card-content px-8 overflow-hidden absolute top-0">
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 2 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideDown}
                                className="flex technology-pills py-6">
                                <button className="mr-2">
                                    <span>Django</span>
                                </button>
                                <button className="mr-2">
                                    <span>React</span>
                                </button>
                                <button>
                                    <span>Postgresql</span>
                                </button>
                            </motion.div>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 2 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={toggleHide}
                                className="flex view-button justify-center pt-64 pb-32">
                                <button className="flex text-white items-center py-2 px-6"
                                        onClick={() => handleModal(2)}>
                                    <span>View Project</span>
                                </button>
                            </motion.div>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 2 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideUp}
                                className="flex">
                                <div className="project-details">
                                    <div className="title">Project Title</div>
                                    <div className="content font-light text-2xl">
                                        Project description and sha type a summary and make the space okay
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="project-card text-white relative mt-5" onMouseEnter={() => handleHover(4)}
                         onMouseLeave={() => setIsActive(0)}>
                        <div className="card-background rounded-3xl bg-black overflow-hidden">
                            <motion.img src={finag1} alt=""
                                        initial={false}
                                        animate={isActive === 4 ? "hover" : "hidden"}
                                        variants={zoom}
                            />
                        </div>
                        <div className="card-content px-8 overflow-hidden absolute top-0">
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 4 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideDown}
                                className="flex technology-pills py-6">
                                <button className="mr-2">
                                    <span>Django</span>
                                </button>
                                <button className="mr-2">
                                    <span>React</span>
                                </button>
                                <button>
                                    <span>Postgresql</span>
                                </button>
                            </motion.div>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 4 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={toggleHide}
                                className="flex view-button justify-center pt-64 pb-32">
                                <button className="flex text-white items-center py-2 px-6"
                                        onClick={() => handleModal(4)}>
                                    <span>View Project</span>
                                </button>
                            </motion.div>
                            <motion.div
                                initial={"hidden"}
                                animate={isActive === 4 ? "hover" : "hidden"}
                                exit={"hidden"}
                                variants={slideUp}
                                className="flex">
                                <div className="project-details">
                                    <div className="project-details">
                                        <div className="title">Finag</div>
                                        <div className="content font-light text-2xl">
                                            USSD based application for farmers to manage their supply chain and
                                            transactions.
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal cardNumber={cardNumber}/>
        </>
    );
};

export default Projects;
