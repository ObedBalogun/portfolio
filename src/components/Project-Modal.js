import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import image from "../images/project.png"
import image2 from "../images/project.png"
import shyne2 from "../images/shyne-cars.png";
import shyneCars from "../images/shyne-cars.png";
import shyneTemp from "../images/shyne-temp.png";


const Modal = ({cardNumber, handleModal}) => {
    const [showModal, setShowModal] = useState(true);
    const [project, setProject] = useState([]);
    const slideUp = {
        hidden: {
            opacity: 0,
            y: '100vh',
            // height: 0,

            transition: {
                duration: .5,
                type: "tween",
                stiffness: 100,
                // ease: 'easeInOut'
            }
        },
        active: {
            opacity: 1,
            height: '90vh',
            y: 0,
            transition: {
                duration: .3,
                type: "tween",
                stiffness: 100,
                // ease: 'easeInOut'
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
    const getData = () => {
        fetch('data/projectDetails.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (projects) {
                let allProjects = projects.projects;
                let getProject = allProjects.filter(project => project.id === cardNumber);
                setProject(getProject);
            });

    }

    useEffect(() => {
        getData();
        if (cardNumber === 0) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    }, [cardNumber]);


    return (
        <AnimatePresence>
            {project.map(project => (
                <motion.div
                key={cardNumber}
                initial={'hidden'}
                animate={showModal ? 'active' : 'hidden'}
                exit={'exit'}
                variants={slideUp}
                className="z-50 project-modal rounded-2xl bg-white mx-6 p-6 h-screen fixed bottom-0 overflow-x-hidden overflow-y-auto">
                <div className="project-content mt-10 mb-10 mx-10">
                    <div className="top-content flex flex-column">
                        <div className="flex-1">
                            <div className="left-text">
                                <h2 className="mb-6">{project.name}</h2>
                                <span className="text-xl text-neutral-600">{project.description}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="left-right mt-20">
                                <div className="role">
                                    <span className="mb-10 text-neutral-600	font-normal">Role</span> <br/>
                                    <span className="font-normal text-xl">{project.role}</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>
                                <div className="stack">
                                    <span className="mb-10 text-neutral-600	font-normal">Tools</span> <br/>
                                    <span
                                        className="font-normal text-xl">{project.tools}</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>
                                <div className="year">
                                    <span className="mb-10 text-neutral-600	font-normal">Year</span> <br/>
                                    <span className="font-normal text-xl">{project.year}</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="other-content mt-20">
                        <div className="flex flex-col">
                            <div className="top-image w-full">
                                <img src={require('../images' + project.image1)} alt="" className="w-full object-cover rounded-3xl"/>
                            </div>
                            <div className="mt-10 w-1/2 text-xl text-neutral-600">
                                {project.details1}
                            </div>
                            <div className="flex middle-image mt-10">
                                <img src={require('../images' + project.image2)} alt="" className="w-1/2 object-cover rounded-3xl"/>
                                <span className="m-6 w-1/2 text-xl text-neutral-600">
                                    {project.details2}
                                </span>
                            </div>
                            <div className="flex mt-10 p-5 text-xl text-neutral-600">
                                <div className="flex-1">
                                    {project.details3}
                                </div>
                                <div className="flex-1">
                                    {project.details4}
                                </div>
                            </div>
                            <div className="final-image mt-10">
                                <img src={require('../images' + project.image3)} alt="" className="w-full object-contain rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close-button inset-x-0" onClick={() => {
                        setShowModal(false);
                        handleModal(0)
                    }}>
                        <button
                            className="flex bg-black/[.2] mx-auto w-24 text-black-100 font-bold py-2 px-4 rounded-full">
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

            </motion.div>
            ))}

        </AnimatePresence>
    );
};

export default Modal;
