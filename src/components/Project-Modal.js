import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import image from "../images/project.png"
import image2 from "../images/project.png"
import shyne2 from "../images/shyne-confirm.png";
import shyneCars from "../images/shyne-cars.png";
import shyneTemp from "../images/shyne-temp.png";
import akmarv2 from "../images/akmarv-2.png";
import akmarv3 from "../images/akmarv-3.png";
import akmarv4 from "../images/akmarv-4.png";

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
    useEffect(() => {
        if (cardNumber === 0) {
            setShowModal(false);
        } else {
            setShowModal(true);
        }
    }, [cardNumber]);

    return (
        <AnimatePresence>

            {cardNumber === 1 && showModal &&
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
                                <h2 className="mb-6">Shyne</h2>
                                <span className="text-xl text-neutral-600"> Shyne is a platform that connects cleaning services to clients within their area who need a
                            shyne.
                             </span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="left-right mt-20">
                                <div className="role">
                                    <span className="mb-10 text-neutral-600	font-normal">Role</span> <br/>
                                    <span className="font-normal text-xl">Software Developer</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>
                                <div className="stack">
                                    <span className="mb-10 text-neutral-600	font-normal">Tools</span> <br/>
                                    <span
                                        className="font-normal text-xl">Django, Bootstrap, REST API, Postgresql, React</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>
                                <div className="year">
                                    <span className="mb-10 text-neutral-600	font-normal">Year</span> <br/>
                                    <span className="font-normal text-xl">2020</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="other-content mt-20">
                        <div className="flex flex-col">
                            <div className="top-image">
                                <img src={shyne2} alt="" className="w-full object-contain rounded-3xl"/>
                            </div>
                            <div className="mt-10 w-1/2 m-6 text-xl text-neutral-600">
                                CashCard enables smallholder farmers in rural Nigeria to receive digital payments and
                                build
                                their financial identity.
                                Over 38 million smallholder farmers in Nigeria lack access to finance to increase their
                                agricultural production.
                            </div>
                            <div className="flex middle-image mt-10">
                                <img src={shyneCars} alt="" className="w-1/2 object-cover rounded-3xl"/>
                                <span className="m-6 w-1/2 text-xl text-neutral-600">CashCard enables smallholder farmers in rural Nigeria to receive
                                    digital payments and build their financial identity. Over 38 million smallholder farmers
                                    in Nigeria lack access to finance to increase their agricultural production.
                                </span>
                            </div>
                            <div className="flex mt-10 text-xl text-neutral-600">
                                <div className="flex-1">CashCard enables smallholder farmers in rural Nigeria to receive
                                    digital payments and build their financial identity.
                                    Over 38 million smallholder farmers in Nigeria lack access to finance to increase
                                    their
                                    agricultural production.
                                </div>
                                <div className="flex-1">
                                    CashCard enables smallholder farmers in rural Nigeria to receive digital payments
                                    and
                                    build their financial identity.
                                    Over 38 million smallholder farmers in Nigeria lack access to finance to increase
                                    their
                                    agricultural production.
                                </div>
                            </div>
                            <div className="final-image mt-10">
                                <img src={shyneTemp} alt="" className="w-full object-contain rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="close-button fixd" onClick={() => {
                        setShowModal(false);
                        handleModal(0)
                    }}>
                        <button
                            className="flex bg-white/[.82] mx-auto w-24 text-black-100 font-bold py-2 px-4 rounded-full">
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
            }
            {cardNumber === 2 && showModal &&
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
                                <h2 className="mb-6">AkMarv</h2>
                                <span className="text-xl text-neutral-600"> Users can listen to beats and download them
                                        with licenses provided by the artist.
                                    </span>

                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="left-right mt-20">
                                <div className="role">
                                    <span className="mb-10 text-neutral-600	font-normal">Role</span> <br/>
                                    <span className="font-normal text-xl">Software Developer</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>
                                <div className="stack">
                                    <span className="mb-10 text-neutral-600	font-normal">Tools</span> <br/>
                                    <span
                                        className="font-normal text-xl">Django, Bootstrap, REST API, Postgresql, React</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>
                                <div className="year">
                                    <span className="mb-10 text-neutral-600	font-normal">Year</span> <br/>
                                    <span className="font-normal text-xl">2020</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="other-content mt-20">
                        <div className="flex flex-col">
                            <div className="top-image">
                                <img src={akmarv2} alt="" className="w-full object-contain rounded-3xl"/>
                            </div>
                            <div className="mt-10 w-1/2 m-6 text-xl text-neutral-600">
                                CashCard enables smallholder farmers in rural Nigeria to receive digital payments and
                                build
                                their financial identity.
                                Over 38 million smallholder farmers in Nigeria lack access to finance to increase their
                                agricultural production.
                            </div>
                            <div className="flex middle-image mt-10">
                                <img src={akmarv3} alt="" className="w-1/2 object-cover rounded-3xl"/>
                                <span className="m-6 w-1/2 text-xl text-neutral-600">CashCard enables smallholder farmers in rural Nigeria to receive
                                    digital payments and build their financial identity. Over 38 million smallholder farmers
                                    in Nigeria lack access to finance to increase their agricultural production.
                                </span>
                            </div>
                            <div className="flex mt-10 text-xl text-neutral-600">
                                <div className="flex-1">CashCard enables smallholder farmers in rural Nigeria to receive
                                    digital payments and build their financial identity.
                                    Over 38 million smallholder farmers in Nigeria lack access to finance to increase
                                    their
                                    agricultural production.
                                </div>
                                <div className="flex-1">
                                    CashCard enables smallholder farmers in rural Nigeria to receive digital payments
                                    and
                                    build their financial identity.
                                    Over 38 million smallholder farmers in Nigeria lack access to finance to increase
                                    their
                                    agricultural production.
                                </div>
                            </div>
                            <div className="final-image mt-10">
                                <img src={akmarv4} alt="" className="w-full object-cover rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="close-button fixed inset-x-0" onClick={() => {
                        setShowModal(false);
                        handleModal(0)
                    }}>
                        <button
                            className="flex bg-white/[.82] mx-auto w-24 text-black-100 font-bold py-2 px-4 rounded-full">
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
            }
            {cardNumber === 4 && showModal &&
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
                                <h2 className="mb-6">Finag</h2>
                                <span className="text-xl text-neutral-600"> Shyne is a platform that connects cleaning services to clients within their area who need a
                            shyne.
                             </span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="left-right mt-20">
                                <div className="role">
                                    <span className="mb-10 text-neutral-600	font-normal">Role</span> <br/>
                                    <span className="font-normal text-xl">Software Developer</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>
                                <div className="stack">
                                    <span className="mb-10 text-neutral-600	font-normal">Tools</span> <br/>
                                    <span className="font-normal text-xl">Django, Python, Postgresql, Redis,</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>
                                <div className="year">
                                    <span className="mb-10 text-neutral-600	font-normal">Year</span> <br/>
                                    <span className="font-normal text-xl">2021 - Present</span>
                                    <hr className="relative solid border-slate-300 my-2"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="other-content mt-20">
                        <div className="flex flex-col">
                            <div className="top-image">
                                <img src={shyne2} alt="" className="w-full object-cover rounded-3xl"/>
                            </div>
                            <div className="mt-10 w-1/2 m-6 text-xl text-neutral-600">
                                CashCard enables smallholder farmers in rural Nigeria to receive digital payments and
                                build
                                their financial identity.
                                Over 38 million smallholder farmers in Nigeria lack access to finance to increase their
                                agricultural production.
                            </div>
                            <div className="flex middle-image mt-10">
                                <img src={image} alt="" className="w-1/2 object-cover rounded-3xl"/>
                                <span className="m-6 w-1/2 text-xl text-neutral-600">CashCard enables smallholder farmers in rural Nigeria to receive
                                    digital payments and build their financial identity. Over 38 million smallholder farmers
                                    in Nigeria lack access to finance to increase their agricultural production.
                                </span>
                            </div>
                            <div className="flex mt-10 text-xl text-neutral-600">
                                <div className="flex-1">CashCard enables smallholder farmers in rural Nigeria to receive
                                    digital payments and build their financial identity.
                                    Over 38 million smallholder farmers in Nigeria lack access to finance to increase
                                    their
                                    agricultural production.
                                </div>
                                <div className="flex-1">
                                    CashCard enables smallholder farmers in rural Nigeria to receive digital payments
                                    and
                                    build their financial identity.
                                    Over 38 million smallholder farmers in Nigeria lack access to finance to increase
                                    their
                                    agricultural production.
                                </div>
                            </div>
                            <div className="final-image mt-10">
                                <img src={image2} alt="" className="w-full object-cover rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="close-button fixed inset-x-0" onClick={() => {
                        setShowModal(false);
                        handleModal(0)
                    }}>
                        <button
                            className="flex bg-white/[.82] mx-auto w-24 text-black-100 font-bold py-2 px-4 rounded-full">
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
            }

        </AnimatePresence>
    );
};

export default Modal;
