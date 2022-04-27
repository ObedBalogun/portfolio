import React from 'react';
import {motion} from 'framer-motion';


const Services = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="services-container">
            <div className="mb-20">
                <h2 className="z-20">Services</h2>
            </div>
            <div className="services-content">
                {/*############ 01 ############*/}
                <hr className="relative solid border-black"/>
                <div className="flex flex-row gap-x-28">
                    <div className="flex-none w-16">
                        <h1 className="py-16">01</h1>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <h1 className="py-16" onMouseEnter={(e)=>setIsOpen(true)}
                            onMouseLeave={(e)=> setIsOpen(false)}>Frontend Design</h1>
                            <div className={`services-text leading-9 -mt-5 mb-5 ${isOpen?'open':'closed'}`}>
                                I use React, TailWind and Bootstrap to design client-friendly and responsive UIs. I
                                enjoy
                                the ease and comfort of using the React Library (with Hooks) to design components
                                for
                                dynamic web applications and React Native for mobile development. I also have some
                                personal experience with the VueJS framework.
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="relative solid border-black"/>
                {/*############ 02 ############*/}
                <div className="flex flex-row gap-x-28">
                    <div className="flex-none w-16">
                        <h1 className="py-16">02</h1>
                    </div>
                    <div className="flex-1">
                        <div className="relative table-content">
                            <h1 className="py-16">Backend Design</h1>
                            <div className="services-text leading-9 -mt-5 mb-5 hidden">
                                I use React,TailWind and Bootstrap to design client-friendly and responsive UIs. I
                                enjoy
                                the ease and comfort of using the React Library (with Hooks) to design components
                                for
                                dynamic web applications and React Native for mobile development. I also have some
                                personal experience with the VueJS framework.
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="relative solid border-black"/>

                {/*############ 03 ############*/}
                <div className="flex flex-row gap-x-28">
                    <div className="flex-none w-16">
                        <h1 className="py-16">03</h1>
                    </div>
                    <div className="flex-1">
                        <motion.div className="relative table-content" >
                            <h1 className="py-16">Backend Design</h1>
                            <motion.div className="services-text leading-9 -mt-5 mb-5 h-0" >
                                I use React,TailWind and Bootstrap to design client-friendly and responsive UIs. I
                                enjoy
                                the ease and comfort of using the React Library (with Hooks) to design components
                                for
                                dynamic web applications and React Native for mobile development. I also have some
                                personal experience with the VueJS framework.
                            </motion.div>
                        </motion.div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Services;
