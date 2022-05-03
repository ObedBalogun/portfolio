import "./assets/tailwind.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar,TopNav} from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <div className="App bg-black">
          <BrowserRouter>
              <div className="z-10">
              <Navbar/>
              </div>
              <AnimatePresence >
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<AboutPage/>}/>
                  <Route path='/contact' element={<ContactPage/>}/>
                  <Route path='/projects' element={<ProjectsPage/>}/>
              </Routes>
              </AnimatePresence>
          </BrowserRouter>
    </div>
  );
}

export default App;
