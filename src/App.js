import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import "./styles/App.css"
import ProjectDisplay from "./pages/ProjectDisplay";
import ContactMe from "./pages/ContactMe";

function App() {
    return <div className={"App"}>
        <Router>
            <Navbar />
            <hr />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/projects"} element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDisplay />} />
                <Route path={"/experience"} element={<Experience />} />
                <Route path={"/"} element={<Link to={"/"}></Link>} />
                <Route path={"/contactme"} element={<ContactMe />} />
            </Routes>
            <hr />
            <Footer />
        </Router>
    </div>;
}

export default App