import React, {useEffect, useState, useContext} from 'react';
import {motion} from 'framer-motion';
import Modal from "./Project-Modal";
import {NavContext} from "../App";

const Projects = ({preLoadedImages,projects}) => {
    const navOpen = useContext(NavContext);
    const [cardNumber, setCardNumber] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const rightSide = projects.filter(project => project.position === 'right');
    const leftSide = projects.filter(project => project.position === 'left');
    const [isActive, setIsActive] = useState(0);
    const handleHover = (cardId) => {
        setIsActive(cardId);
    }
    const handleModal = (cardNumber) => {
        setCardNumber(cardNumber);
        setShowModal(true);
        navOpen()
    }
    const handleOverflow = (cardNumber) => {
        let container = document.getElementsByClassName("project-container");
        if (cardNumber === 0) {
            container[0].classList.replace("overflow-hidden", "overflow-y-auto")
        } else {
            container[0].classList.replace("overflow-y-auto", "overflow-hidden")
        }
    }
    const slideDown = {
        hidden: {
            opacity: 0,
            y: -10,

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
    useEffect(() => {
        handleOverflow(cardNumber)
    }, [cardNumber]);
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])



    return (
        <>
            <div className="flex flex-col md:flex-row justify-center px-2 md:px-8 mt-32">
                <div className="md:flex-1">
                    {leftSide.map((project) => (
                        <div key={project.id} className="project-card mx-auto text-white relative mb-5 md:p-4"
                             onMouseEnter={() => handleHover(project.id)}
                             onMouseLeave={() => setIsActive(0)}
                             onClick={() => handleModal(project.id)}>
                            <div className="card-background rounded-3xl bg-black overflow-hidden h-full">
                                <motion.img src={require('../images' + project.imageURL)} alt=""
                                            className={`w-full h-full object-cover`}
                                            initial={false}
                                            animate={isActive === project.id ? "hover" : "hidden"}
                                            variants={zoom}
                                />
                            </div>
                            <div className="flex-row grid h-full card-content px-4 md:px-6 overflow-hidden absolute top-0">
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideDown}
                                    className="space-x-1 technology-pills py-4 md:py-8 md:py-10 w-full">
                                    {project.technology.map((technology, techIndex) => (
                                        <button key={techIndex} className={'mb-1'}>
                                            <span>{technology}</span>
                                        </button>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={toggleHide}
                                    className="view-button hidden md:block place-self-center"
                                    onClick={() => handleModal(project.id)}>
                                    <button className="text-white items-center py-3 px-7"
                                            onClick={() => handleModal(project.id)}>
                                        <span>View Project</span>
                                    </button>
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideUp}
                                    className="place-self-end mb-10">
                                    <div className="project-details">
                                        <div className="title text-xl md:text-3xl">{project.name}</div>
                                        <div className="content font-light text-sm md:text-2xl w-full">
                                            {project.description}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:flex-1 md:mt-24 md:mb-0 mb-24">
                    {rightSide.map((project) => (
                        <div key={project.id} className="project-card mx-auto text-white relative mb-5 md:p-4"
                             onMouseEnter={() => handleHover(project.id)}
                             onMouseLeave={() => setIsActive(0)}
                             onClick={() => handleModal(project.id)}>
                            <div className="card-background rounded-3xl bg-black overflow-hidden h-full object-cover">
                                <motion.img src={preLoadedImages[project.id-1]} alt=""
                                            className="h-full w-full object-cover"
                                            initial={false}
                                            animate={isActive === project.id && width >= 768 ? "hover" : "hidden"}
                                            variants={zoom}
                                />
                            </div>
                            <div className="flex-row grid h-full card-content px-4 md:px-6 overflow-hidden absolute top-0">
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideDown}
                                    className="space-x-1 technology-pills py-8 md:py-10">
                                    {project.technology.map((technology, techIndex) => (
                                        <button key={techIndex} className="mb-1">
                                            <span>{technology}</span>
                                        </button>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={toggleHide}
                                    className="view-button hidden md:block place-self-center"
                                    onClick={() => handleModal(project.id)}>
                                    <button className="text-white items-center py-3 px-7">
                                        <span>View Project</span>
                                    </button>
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideUp}
                                    className="place-self-end mb-10">
                                    <div className="project-details">
                                        <div className="title text-xl md:text-3xl">{project.name}</div>
                                        <div className="content font-light text-sm md:text-2xl w-full">
                                            {project.description}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            {showModal &&
                <Modal cardNumber={cardNumber} handleModal={handleModal}/>
            }
        </>
    );
};

export default Projects;

