import "./assets/fonts/BR-Firma/Regular.woff"
import "./assets/styles/style.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import {projects} from "./data/projects";
import portrait from "./potrait.png"
import WebFont from 'webfontloader';
import Preloader from "./components/preloader";



WebFont.load({
    custom: {
        families: ['Regular.woff'],
    },
});

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
    const handleNavToggle = () => {
        setShowNav(!showNav)
    };
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Regular','BR Firma'],
            }
        });
    }, []);
    useEffect(() => {
        setPreLoadProjects(projects);
        if (preLoadedPictures.length > 0) {
            setIsLoading(false)
        }

    }, [preLoadedPictures])

    return (
        <div className="App bg-black cursor-default	">
            {isLoading ? <Preloader/> : <BrowserRouter>
                {showNav && <Navbar/>}
                <AnimatePresence exitBeforeEnter>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<AboutPage portrait={preLoadedPortrait}/>}/>
                        <Route path='/contact' element={<ContactPage/>}/>
                        <Route path='/projects' element={<ProjectsPage navOpen={handleNavToggle}
                                                                       preLoadedImages={preLoadedPictures}
                                                                       projects={preLoadProjects}/>}/>
                    </Routes>
                </AnimatePresence>
            </BrowserRouter>
            }
        </div>
    );
}

export default App;
