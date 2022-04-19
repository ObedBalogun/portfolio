import React from 'react';

const Home = () => {
    return (
        <div className="container relative h-screen w-screen overflow-hidden">
            <div className="background">
                <span className="green"/>
                <span className="blue "/>
                <div className="top-nav flex justify-between px-8 pt-12">
                    <div className="download-resume z-10">
                        <button className='download-resume-button'>Download Resume</button></div>
                    <div className="download-resume z-10">
                        <button className='download-resume-button'>Download Resume</button>
                    </div>
                </div>
                <div className="homepage-headers flex justify-center items-center">
                    <div className="main-header">
                        Hi, I’m Obed Balogun <br/>
                        a software developer.
                    </div>
                    <div className="main-sub-header">
                        I build scalable and reliable web applications
                        from stable backend to frontend designs that work.
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;
