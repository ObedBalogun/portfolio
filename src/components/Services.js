import React, {useState} from 'react';
import {motion} from 'framer-motion';


const Services = () => {
    const [isOpen, setIsOpen] = useState(0);
    const handleHover = (slideId) => {
        setIsOpen(slideId);
    }
    const variants = {
        hidden: {
            y: -100,
            height: 0,
            opacity: 0,
            transition: {
                y: {stiffness: 1000, velocity: -100}
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            height: 'auto',
            transition: {
                y: {stiffness: 1000}
            }
        }
    };
    return (
        <div className="services-container">
            <div className="relative mb-5 md:mb-16 text-2xl md:text-6xl font-semibold">
                Services
            </div>
            <div className="services-content">
                {/*############ 01 ############*/}
                <hr className="relative solid border-black"/>
                <div className="flex flex-col md:flex-row gap-x-28 cursor-pointer"
                     onMouseEnter={() => handleHover(1)}
                     onMouseLeave={() => setIsOpen(0)}>
                    <div className="relative md:flex-none w-16">
                        <div className="text-2xl font-bold md:text-6xl py-2 md:py-10">01</div>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <div className="flex md:flex-none justify-between">
                                <div className="text-2xl md:text-6xl font-bold md:py-10">Frontend Design</div>
                                <div className="md:hidden text-2xl md:text-6xl font-bold md:py-10">
                                    {isOpen === 1 ? <svg width="19" height="4" viewBox="0 0 19 4" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.800781 3.5V0.5H18.8008V3.5H0.800781Z" fill="black"/>
                                        </svg>

                                        : <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.30078 0H11.3008V18H8.30078V0Z" fill="black"/>
                                            <path d="M0.800781 10.5V7.5H18.8008V10.5H0.800781Z" fill="black"/>
                                        </svg>

                                    }

                                </div>
                            </div>
                            <motion.div
                                initial={"hidden"}
                                animate={isOpen === 1 ? "visible" : "hidden"}
                                exit={"hidden"}
                                variants={variants}
                                className={'services-text md:leading-9 my-2 md:-mt-5 pointer-events-none text-base font-semibold md:text-2xl md:w-3/4'}>
                                I use React, TailWind and Bootstrap to design client-friendly and responsive UIs. I
                                enjoy
                                the ease and comfort of using the React Library (with Hooks) to design components
                                for
                                dynamic web applications and React Native for mobile development. I also have some
                                personal experience with the VueJS framework.
                            </motion.div>
                        </div>

                    </div>
                </div>
                <hr className="relative solid border-black"/>
                {/*############ 02 ############*/}
                <div className="flex flex-col md:flex-row gap-x-28 cursor-pointer"
                     onMouseEnter={() => handleHover(2)}
                     onMouseLeave={() => setIsOpen(0)}>
                    <div className="relative md:flex-none w-16">
                        <div className="text-2xl font-bold md:text-6xl py-2 md:py-10">02</div>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <div className="flex md:flex-none justify-between">
                                <div className="text-2xl md:text-6xl font-bold md:py-10">Backend Design</div>
                                <div className="md:hidden text-2xl md:text-6xl font-bold md:py-10">
                                    {isOpen === 2 ? <svg width="19" height="4" viewBox="0 0 19 4" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.800781 3.5V0.5H18.8008V3.5H0.800781Z" fill="black"/>
                                        </svg>

                                        : <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.30078 0H11.3008V18H8.30078V0Z" fill="black"/>
                                            <path d="M0.800781 10.5V7.5H18.8008V10.5H0.800781Z" fill="black"/>
                                        </svg>

                                    }

                                </div>
                            </div>
                            <motion.div
                                initial={"hidden"}
                                animate={isOpen === 2 ? "visible" : "hidden"}
                                exit={"hidden"}
                                variants={variants}
                                className="services-text md:leading-9 my-2 md:-mt-5 pointer-events-none text-base font-semibold md:text-2xl md:w-3/4">
                                I am comfortable with and often utilize Python/Django and its associated stack. I have
                                built APIs with the Django REST framework, interacted with databases using Django Object
                                Relational Mapping and also tested code. I have also built some applications with other
                                frameworks like Laravel(PHP), Spring(Java) and Node.
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr className="relative solid border-black"/>

                {/*############ 03 ############*/}
                <div className="flex flex-col md:flex-row gap-x-28 cursor-pointer"
                     onMouseEnter={() => handleHover(3)}
                     onMouseLeave={() => setIsOpen(0)}>
                    <div className="relative flex-none w-16">
                        <div className="text-2xl font-bold md:text-6xl py-2 md:py-10">03</div>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <div className="flex md:flex-none justify-between">
                                <div className="text-2xl md:text-6xl font-bold md:py-10">Database Design</div>
                                <div className="md:hidden text-2xl md:text-6xl font-bold md:py-10">
                                    {isOpen === 3 ? <svg width="19" height="4" viewBox="0 0 19 4" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.800781 3.5V0.5H18.8008V3.5H0.800781Z" fill="black"/>
                                        </svg>

                                        : <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.30078 0H11.3008V18H8.30078V0Z" fill="black"/>
                                            <path d="M0.800781 10.5V7.5H18.8008V10.5H0.800781Z" fill="black"/>
                                        </svg>

                                    }

                                </div>
                            </div>
                            <motion.div
                                initial={'hidden'}
                                animate={isOpen === 3 ? "visible" : "hidden"}
                                exit={'hidden'}
                                variants={variants}
                                className="services-text md:leading-9 my-2 md:-mt-5 pointer-events-none text-base font-semibold md:text-2xl md:w-3/4">
                                I use Postgresql and MySql to build object oriented database systems. I have some
                                experience with NoSql database structures like Redis.
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr className="relative solid border-black"/>

                {/*############ 04 ############*/}
                <div className="flex flex-col md:flex-row gap-x-28 cursor-pointer"
                     onMouseEnter={() => handleHover(4)}
                     onMouseLeave={() => setIsOpen(0)}>
                    <div className="relative md:flex-none w-16">
                        <div className="text-2xl font-bold md:text-6xl py-2 md:py-10">04</div>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <div className="flex md:flex-none justify-between">
                                <div className="text-2xl md:text-6xl font-bold md:py-10">Research</div>
                                <div className="md:hidden text-2xl md:text-6xl font-bold md:py-10">
                                    {isOpen === 4 ? <svg width="19" height="4" viewBox="0 0 19 4" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.800781 3.5V0.5H18.8008V3.5H0.800781Z" fill="black"/>
                                        </svg>

                                        : <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.30078 0H11.3008V18H8.30078V0Z" fill="black"/>
                                            <path d="M0.800781 10.5V7.5H18.8008V10.5H0.800781Z" fill="black"/>
                                        </svg>

                                    }

                                </div>
                            </div>
                            <motion.div
                                initial={'hidden'}
                                animate={isOpen === 4 ? "visible" : "hidden"}
                                exit={'hidden'}
                                variants={variants}
                                className="services-text md:leading-9 my-2 md:-mt-5 pointer-events-none text-base font-semibold md:text-2xl md:w-3/4">
                                Understanding clients needs and requirements builds on the projects knowledge. This
                                knowledge along with research helps to determine the best way to approach the
                                project and deliver user-friendly and scalable solutions.
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr className="relative solid border-black"/>


            </div>
        </div>
    );
};

export default Services;
