import React from 'react';
import {motion} from "framer-motion";

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="relative mb-20 text-6xl font-semibold">
                Work Experience
            </div>
            <div className="experience-content">
                <hr className="relative solid border-gray-500"/>
                <div className="flex flex-row justify-between py-8">
                    <div className="relative flex-1 text-2xl font-semibold text-black">
                        AUGUST 2021 - PRESENT
                    </div>
                    <div className="flex-1 relative text-2xl font-semibold text-black">
                        Crop2Cash
                    </div>
                    <div className="flex-1 relative text-2xl font-semibold text-black">
                        Software Engineer
                    </div>
                </div>
                <hr className="relative solid border-gray-500"/>
                <div className="flex flex-row justify-between py-8">
                    <div className="relative flex-1 text-2xl font-semibold text-black">
                        DECEMBER 2020 - PRESENT
                    </div>
                    <div className="flex-1 relative text-2xl font-semibold text-black">
                        GOOD CHAT
                    </div>
                    <div className="flex-1 relative text-2xl font-semibold text-black">
                        Software Developer
                    </div>
                </div>
                <hr className="relative solid border-gray-500"/>
                <div className="flex flex-row justify-between py-8">
                    <div className="relative flex-1 text-2xl font-semibold text-black">
                        FEBRUARY 2020 - NOVEMBER 2020
                    </div>
                    <div className="flex-1 relative text-2xl font-semibold text-black">
                        SELORM NIGERIA
                    </div>
                    <div className="flex-1 relative text-2xl font-semibold text-black">
                        Software Developer
                    </div>
                </div>
                <hr className="relative solid border-gray-500"/>
                <div className="flex flex-row justify-between py-8">
                    <div className="relative flex-1 text-2xl font-semibold text-black">
                        APRIL 2018 - MARCH 2019
                    </div>
                    <div className="flex-1 relative text-2xl font-semibold text-black">
                        TEMPO PAPER, PULP AND <br/> PACKAGING LTD,
                    </div>
                    <div className="flex-1 relative text-2xl font-semibold text-black">
                        ICT Support
                    </div>
                </div>
                <hr className="relative solid border-gray-500"/>

            </div>
        </div>
    );
};

export default Experience;
