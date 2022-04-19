import React from 'react';
import {TopNav} from "../components/Navbar";

const ProjectsPage = () => {
    return (
        <div>
            <div className="container relative h-screen w-screen overflow-hidden project-background bg-black">
            <div className="background">
                <span className="green"/>
                <span className="blue "/>
                <TopNav/>
            </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
