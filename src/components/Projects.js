import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import Modal from "./Project-Modal";
import {projects} from "../data/projects";


const Projects = ({navOpen}) => {
    const [cardNumber, setCardNumber] = useState(0);
    const [showModal, setShowModal] = useState(false);
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
    return (
        <>
            <div className="flex flex-column justify-center px-8 mt-32 relative">
                <div className="flex-1">
                    {leftSide.map((project) => (
                        <div key={project.id} className="project-card text-white relative mb-5 lg:mb-0 lg:p-4"
                             onMouseEnter={() => handleHover(project.id)}
                             onMouseLeave={() => setIsActive(0)}>
                            <div className="card-background rounded-3xl bg-black overflow-hidden h-full">
                                <motion.img src={require('../images' + project.imageURL)} alt=""
                                            className={`w-full h-full object-cover`}
                                            initial={false}
                                            animate={isActive === project.id ? "hover" : "hidden"}
                                            variants={zoom}
                                />
                            </div>
                            <div className="card-content px-8 overflow-hidden absolute top-0">
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideDown}
                                    className="flex technology-pills py-10">
                                    {project.technology.map((technology, techIndex) => (
                                        <button className="mr-2" key={techIndex}>
                                            <span>{technology}</span>
                                        </button>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={toggleHide}
                                    className="flex view-button justify-center pt-64 pb-32"
                                    onClick={() => handleModal(project.id)}>
                                    <button className="flex text-white items-center py-3 px-7"
                                            onClick={() => handleModal(project.id)}>
                                        <span>View Project</span>
                                    </button>
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideUp}
                                    className="flex -mt-6">
                                    <div className="project-details">
                                        <div className="title">Shyne</div>
                                        <div className="content font-light text-2xl">
                                            {project.description}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 mt-24 text-white relative">
                    {rightSide.map((project) => (
                        <div key={project.id} className="project-card text-white relative lg:p-4"
                             onMouseEnter={() => handleHover(project.id)}
                             onMouseLeave={() => setIsActive(0)}>
                            <div
                                className="card-background rounded-3xl bg-black overflow-hidden h-full w-full object-cover">
                                <motion.img src={require('../images' + project.imageURL)} alt=""
                                            className="h-full w-full object-cover"
                                            initial={false}
                                            animate={isActive === project.id ? "hover" : "hidden"}
                                            variants={zoom}
                                />
                            </div>
                            <div className="card-content px-8 overflow-hidden absolute top-0">
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideDown}
                                    className="flex technology-pills py-10">
                                    {project.technology.map((technology, techIndex) => (
                                        <button key={techIndex} className="mr-2">
                                            <span>{technology}</span>
                                        </button>
                                    ))}
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={toggleHide}
                                    className="flex view-button justify-center pt-64 pb-32"
                                    onClick={() => handleModal(project.id)}>
                                    <button className="flex text-white items-center py-3 px-7"
                                            onClick={() => handleModal(project.id)}>
                                        <span>View Project</span>
                                    </button>
                                </motion.div>
                                <motion.div
                                    initial={"hidden"}
                                    animate={isActive === project.id ? "hover" : "hidden"}
                                    exit={"hidden"}
                                    variants={slideUp}
                                    className="flex">
                                    <div className="project-details">
                                        <div className="title">{project.name}</div>
                                        <div className="content font-light text-2xl">
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

