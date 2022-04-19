import React from 'react';
import {TopNav} from "../components/Navbar";

const ContactPage = () => {
    return (
        <div>
            <div className="container relative h-screen w-screen overflow-hidden contact-background bg-black">
                <div className="background">
                <span className="green"/>
                <span className="blue"/>
                <TopNav/>
                    <div className="grid grid-flow-col gap-4 text-white px-8 mt-20">
                        <div className="col-span-6 z-20 left-side-text">
                            Have an idea or a concept that really excites you? what do you say? Let’s make magic together.
                        </div>
                        <div className="col-span-6 z-20 right-side-text">
                            <div className="email-address">
                                <h3>Email</h3>
                                <h2>obedbalogun@gmail.com</h2>
                            </div>
                            <div className="phone-number md:mt-14">
                                <h3>Phone</h3>
                                <h2>+234 706 741 7382</h2>
                            </div>
                        </div>
                    </div>
            </div>

            </div>
        </div>
    );
};

export default ContactPage;
