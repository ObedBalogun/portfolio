import "./assets/tailwind.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar,TopNav} from "./components/Navbar";
// import 'tw-elements';
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<AboutPage/>}/>
                  <Route path='/contact' element={<ContactPage/>}/>
                  <Route path='/projects' element={<ProjectsPage/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
