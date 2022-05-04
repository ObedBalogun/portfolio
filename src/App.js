import "./assets/tailwind.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar,TopNav} from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const handleNavToggle = () => {setIsNavOpen(!isNavOpen)};

  return (
    <div className="App bg-black">
          <BrowserRouter>
              {isNavOpen&&<Navbar/>}
              <AnimatePresence exitBeforeEnter >
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<AboutPage/>}/>
                  <Route path='/contact' element={<ContactPage/>}/>
                  <Route path='/projects' element={<ProjectsPage navOpen={handleNavToggle}/>}/>
              </Routes>
              </AnimatePresence>
          </BrowserRouter>
    </div>
  );
}

export default App;
