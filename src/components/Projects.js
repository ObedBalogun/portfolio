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
            <div className="projects-container flex flex-col sm:flex-row justify-center px-2 sm:px-8 mt-32">
                <div className="sm:flex-1">
                    {leftSide.map((project) => (
                        <motion.div key={project.id} className="project-card mx-auto justify-center text-white relative p-4 sm:p-3"
                             onMouseEnter={() => handleHover(project.id)}
                             onMouseLeave={() => setIsActive(0)}
                             onClick={() => project.mode ==='live'? window.open(project.link): handleModal(project.id)}>
                            <div className="card-background rounded-3xl bg-black overflow-hidden h-full">
                                <motion.img src={require('../images' + project.imageURL)} alt=""
                                            className={`w-full h-full object-cover ${width <= 768 ? 'opacity-60':'' }`}
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
                                    className="flex-wrap space-x-0.5 mx-auto sm:px-0 sm:space-x-1 technology-pills text-sm sm:text-base py-8 sm:py-10 w-full">
                                    {project.technology.map((technology, techIndex) => (
                                        <button key={techIndex} className={'mb-2'}>
                                            <span>{technology}</span>
                                        </button>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={toggleHide}
                                    className="view-button place-self-center"
                                    onClick={() => project.mode ==='live'? "": handleModal(project.id)}>
                                    { project.mode === 'live' ?
                                        <a href={project.link} target="_blank" rel="noreferrer" className="text-white items-center py-3 px-7">
                                            <span>Visit Site</span>
                                        </a> :
                                        <button className="text-white items-center py-3 px-7"
                                                onClick={() => handleModal(project.id)}>
                                            <span>View Project</span>
                                        </button>
                                    }
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideUp}
                                    className="place-self-end mb-10">
                                    <div className="project-details">
                                        <div className="title text-xl lg:text-3xl">{project.name}</div>
                                        <div className="content font-light text-sm lg:text-2xl w-full">
                                            {project.description}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="sm:flex-1 sm:mt-24 sm:mb-0 mb-24">
                    {rightSide.map((project) => (
                        <div key={project.id} className="project-card mx-auto text-white relative mb-5 p-4 sm:p-3"
                             onMouseEnter={() => handleHover(project.id)}
                             onMouseLeave={() => setIsActive(0)}
                             onClick={() => project.mode ==='live'? "":handleModal(project.id)}>
                        <div className="card-background rounded-3xl bg-black overflow-hidden h-full object-cover">
                                <motion.img src={preLoadedImages[project.id-1]} alt=""
                                            className={`h-full w-full object-cover ${width <= 768 ? 'opacity-60':''}`}
                                            initial={false}
                                            animate={isActive === project.id && width >= 768 ? "hover" : "hidden"}
                                            variants={zoom}
                                />
                            </div>
                            <div className="flex-row grid h-full card-content px-4 sm:px-6 overflow-hidden absolute top-0">
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
                                    className="view-button place-self-center"
                                    onClick={() => project.mode === 'live' ? '' : handleModal(project.id)}>
                                { project.mode === 'live' ?
                                        <a href={project.link} target="_blank" rel="noreferrer" className="text-white items-center py-3 px-7">
                                            <span>Visit Site</span>
                                        </a> :
                                        <button className="text-white items-center py-3 px-7"
                                                onClick={() => project.mode ==='live'? "":handleModal(project.id)}>
                                        <span>View Project</span>
                                        </button>
                                    }
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id || width <= 768 ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideUp}
                                    className="place-self-end mb-10">
                                    <div className="project-details">
                                        <div className="title text-xl lg:text-3xl">{project.name}</div>
                                        <div className="content font-light text-sm lg:text-2xl w-full">
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

