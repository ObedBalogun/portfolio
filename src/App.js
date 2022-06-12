import "./assets/fonts/BR-Firma/Regular.woff"
import "./assets/styles/style.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import {AnimatePresence} from "framer-motion";
import {useEffect, useState, createContext, useContext} from "react";
import {projects} from "./data/projects";
import portrait from "./potrait.png"
import Preloader from "./components/preloader";

export const NavContext = createContext('navb');

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showNav, setShowNav] = useState(true);
    const [preLoadProjects, setPreLoadProjects] = useState([]);
    const preLoadedPictures = projects.map((project) => {
        const img = new Image()
        img.src = require('./images' + project.imageURL)
        return img.src
    });
    const preLoadedPortrait = new Image().src=portrait;

    const handleNavToggle = (condition) => {
        if(condition){
            setShowNav(true)
        }
        else {
            setShowNav(!showNav)
        }
    };
    const counter = () => {
        let counter = 0;
        let c = 0;
        const i = setInterval(function () {
            counter++;
        }, 10);
    }
    useEffect(() => {
        setPreLoadProjects(projects);
        setInterval(() => {
            setIsLoading(false)
        },2000);

    }, [preLoadedPictures])

    return (
        <NavContext.Provider value={handleNavToggle}>
            <div className="App bg-black cursor-default">
                {isLoading ? <Preloader/> : <BrowserRouter>
                    {showNav && <Navbar/>}
                    <AnimatePresence exitBeforeEnter>
                        <Routes>
                            <Route path='/' element={<Home navOpen={handleNavToggle}/>}/>
                            <Route path='/about' element={<AboutPage portrait={preLoadedPortrait} navOpen={handleNavToggle}/>}/>
                            <Route path='/contact' element={<ContactPage navOpen={handleNavToggle}/>}/>
                            <Route path='/projects' element={<ProjectsPage navOpen={handleNavToggle}
                                                                           preLoadedImages={preLoadedPictures}
                                                                           projects={preLoadProjects}/>}/>
                        </Routes>
                    </AnimatePresence>
                </BrowserRouter>
                }
            </div>
        </NavContext.Provider>
    );
}

export default App;
