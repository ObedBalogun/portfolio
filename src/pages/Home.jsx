import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="top-nav relative flex mt-5">
                <div className="download-resume-button">
                    <button className='download-resume'>Download Resume</button>
                </div>
                <div className="home-button">

                </div>
            </div>
            <div className="homepage-headers flex justify-center items-center">
                <div className="main-header ">
                   Hi, I’m Obed Balogun <br/>
                    a software developer.
                </div>
                <div className='main-sub-header text-center my-auto inset-y-0'>
                    I build scalable and reliable web applications
                    from stable backend to frontend designs that work.
                </div>
            </div>

        </div>
    );
};

export default Home;
