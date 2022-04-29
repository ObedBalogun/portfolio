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
            <div className="relative mb-20 text-6xl font-semibold">
                Services
            </div>
            <div className="services-content">
                {/*############ 01 ############*/}
                <hr className="relative solid border-black"/>
                <div className="flex flex-row gap-x-28" onMouseEnter={() => handleHover(1)}
                     onMouseLeave={() => setIsOpen(0)}>
                    <div className="relative flex-none w-16">
                        <h1 className="py-16">01</h1>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <h1 className="py-16">Frontend Design</h1>
                            <motion.div
                                initial={"hidden"}
                                animate={isOpen === 1 ? "visible" : "hidden"}
                                exit={"hidden"}
                                variants={variants}
                                className={'services-text leading-9 -mt-5 mb-5'}>
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
                <div className="flex flex-row gap-x-28" onMouseEnter={() => handleHover(2)}
                     onMouseLeave={() => setIsOpen(0)}>
                    <div className="relative flex-none w-16">
                        <h1 className="py-16">02</h1>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <h1 className="py-16">Backend Design</h1>
                            <motion.div
                                initial={"hidden"}
                                animate={isOpen === 2 ? "visible" : "hidden"}
                                exit={"hidden"}
                                variants={variants}
                                className="services-text leading-9 -mt-5 mb-5">
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
                <div className="flex flex-row gap-x-28" onMouseEnter={() => handleHover(3)}
                     onMouseLeave={() => setIsOpen(0)}>
                    <div className="relative flex-none w-16">
                        <h1 className="py-16">03</h1>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <h1 className="py-16">Database Design</h1>
                            <motion.div
                                initial={'hidden'}
                                animate={isOpen === 3 ? "visible" : "hidden"}
                                exit={'hidden'}
                                variants={variants}
                                className="services-text leading-9 -mt-5 mb-5 ">
                                I use Postgresql and MySql to build object oriented database systems. I have some
                                experience with NoSql database structures like Redis.
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr className="relative solid border-black"/>

                {/*############ 04 ############*/}
                <div className="flex flex-row gap-x-28" onMouseEnter={() => handleHover(4)}
                     onMouseLeave={() => setIsOpen(0)}>
                    <div className="relative flex-none w-16">
                        <h1 className="py-16">04</h1>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <h1 className="py-16">Research</h1>
                            <motion.div
                                initial={'hidden'}
                                animate={isOpen === 4 ? "visible" : "hidden"}
                                exit={'hidden'}
                                variants={variants}
                                className="services-text leading-9 -mt-5 mb-5 ">
                                Understanding clients needs and requirements builds on the projects knowledge. This
                                knowledge along with research helps to determine the best way to approach the client's
                                project and deliver according to the client's specifications.
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
