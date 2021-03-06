import React, {useEffect, useState, useContext} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {projectDetails} from "../data/projects";

const Modal = ({cardNumber, handleModal}) => {
    const [showModal, setShowModal] = useState(true);
    const slideUp = {
        hidden: {
            opacity: 0,
            y: '100vh',
            // height: 0,

            transition: {
                duration: .5,
                type: "tween",
                ease: 'easeInOut'
            }
        },
        active: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3,
                type: "tween",
                ease: 'easeInOut'
            }
        },
        exit: {
            opacity: 0,
            y: '100vh',
            // height: 0,
            transition: {
                duration: .5,
                type: "tween",
                stiffness: 100,
            }

        }
    }
    const project = projectDetails.find(project => project.id === cardNumber);
    const handleClose = () => {
        setShowModal(false);
        handleModal(0);
    }
    useEffect(() => {
        if (cardNumber === 0) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    }, [cardNumber]);


    return (
        <>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        key={cardNumber}
                        initial={'hidden'}
                        animate={showModal ? 'active' : 'hidden'}
                        exit={'exit'}
                        variants={slideUp}
                        className="modal-background bg-black/[.6] z-50 h-screen w-screen overflow-hidden fixed mx-auto bottom-0"
                        onClick={handleClose}>
                        <div
                            className="project-modal rounded-2xl bg-white mx-2 md:mx-8 mt-10 md:p-10 h-screen overflow-y-auto">
                            <div className="project-content m-4 md:m-6 ">
                                <div className="top-content flex-row md:flex md:flex-column gap-4">
                                    <div className="md:flex-1">
                                        <div className="left-text">
                                            <span
                                                className="mb-6 text-4xl lg:text-5xl font-semibold">{project.name}</span>
                                            <span
                                                className="text-lg lg:text-2xl hidden md:block md:mt-9 font-medium text-neutral-600 text-left">{project.description}</span>
                                        </div>
                                    </div>
                                    <div className="md:flex-1">
                                        <div className="mt-4 md:mt-20">
                                            <div className="role">
                                                <span
                                                    className="text-sm lg:text-lg mb-10 text-neutral-600	font-normal">Role</span>
                                                <br/>
                                                <span className="text-base font-normal lg:text-xl">{project.role}</span>
                                                <hr className="relative solid border-slate-300 my-2"/>
                                            </div>
                                            <div className="stack">
                                                <span
                                                    className="text-sm lg:text-lg mb-10 text-neutral-600	font-normal">Tools</span>
                                                <br/>
                                                <span
                                                    className="font-normal text-base lg:text-xl">{project.tools}</span>
                                                <hr className="relative solid border-slate-300 my-2"/>
                                            </div>
                                            <div className="year">
                                                <span
                                                    className="mb-10 text-neutral-600 font-normal text-sm lg:text-lg">Year</span>
                                                <br/>
                                                <span
                                                    className="font-normal text-base text-sm lg:text-lg">{project.year}</span>
                                                <hr className="relative solid border-slate-300 my-2"/>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-10 text-base md:hidden font-medium text-neutral-600">{project.description}</div>
                                    </div>
                                </div>
                                <div className="other-content flex flex-col mt-10 md:mt-20">
                                    <div className="top-image w-full">
                                        <img src={require('../images' + project.image1)} alt=""
                                             className="w-full object-cover rounded-3xl"/>
                                    </div>
                                    <div className="flex-row lg:flex mt-10 lg:mt-20 md:text-xl text-neutral-600 gap-10">
                                    <div className="flex-1">
                                        {project.details1}
                                    </div>
                                        <div className="flex-1 mt-5 lg:mt-0">
                                        {project.details2}
                                    </div>
                                    </div>
                                    <div className="lg:flex middle-image mt-10">
                                        <img src={require('../images' + project.image2)} alt=""
                                             className=" flex-1 object-cover rounded-3xl"/>
                                        <div
                                            className="flex-1 mt-5 lg:my-auto md:p-6 lg:w-1/2 md:ml-10 md:text-xl text-neutral-600">
                                            <p>{project.details3}</p> <br/>
                                            <p>{project.details4}</p> <br/>
                                            <p>{project.details5}</p>
                                        </div>
                                    </div>
                                    <div className="final-content relative h-screen md:h-full sm:mt-0 mt-60">
                                        <div className="absolute md:relative flex flex-col mt-24 md:flex-row lg:mt-20 md:text-xl text-neutral-600 gap-4">
                                            <div className="flex-1 ">
                                                {project.details6}
                                            </div>
                                            <div className="flex-1">
                                                {project.details7}
                                            </div>
                                        </div>
                                        <div className="absolute md:relative -top-44 md:top-0 final-image md:mt-10 w-full">
                                            <img src={require('../images' + project.image3)} alt=""
                                                 className="w-full object-cover rounded-3xl"/>
                                        </div>
                                    </div>
                                    <div className="final-content-mobile hidden">
                                        <div className="flex mt-20 text-xl text-neutral-600 gap-4">
                                            <div className="flex-1 ">
                                                {project.details6}
                                            </div>
                                            <div className="flex-1">
                                                {project.details7}
                                            </div>
                                        </div>
                                        <div className="final-image mt-10">
                                            <img src={require('../images' + project.image3)} alt=""
                                                 className="w-full object-contain rounded-3xl"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="close-button fixed bottom-20 md:bottom-14 inset-x-0" onClick={handleClose}>
                                <button
                                    className="flex bg-white/[.8] mx-auto w-24 text-black-100 font-normal py-4 px-4 rounded-full md:rounded-xl shadow-lg">
                            <span className={"flex items-center"}>
                                <span className={"pr-2"}>Close</span>
                                <span>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.0003 18.8334C14.5837 18.8334 18.3337 15.0834 18.3337 10.5C18.3337 5.91669 14.5837 2.16669 10.0003 2.16669C5.41699 2.16669 1.66699 5.91669 1.66699 10.5C1.66699 15.0834 5.41699 18.8334 10.0003 18.8334Z"
                                        stroke="black" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                    <path d="M7.6416 12.8583L12.3583 8.14166" stroke="black" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M12.3583 12.8583L7.6416 8.14166" stroke="black" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </span>
                            </span>
                                </button>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )

};

export default Modal;
