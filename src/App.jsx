import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import './App.scss';
import { useState } from "react";
import Menu from "./components/Menu/Menu";


function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='app'>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro/>
                <About/>
                <Portfolio/>
                <Works/>
                <Contact/>
            </div>
        </div>
    )
}

export default App;