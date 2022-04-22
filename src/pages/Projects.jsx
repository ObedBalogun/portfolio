import React from 'react';
import {TopNav} from "../components/Navbar";
import {useLocation} from "react-router-dom";

const ProjectsPage = () => {
    let location = useLocation()
    location = location.pathname;
    location = location === "/" || location === "/about" ;
    return (
        <div>
            <div className="container relative h-screen w-screen overflow-hidden project-background bg-black">
            <div className="background">
                <span className="green"/>
                <span className="blue"/>
                {/*<TopNav/>*/}
            </div>
                <div className="page-title text-center text-white">
                    <h1 className="z-20">Projects</h1>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
