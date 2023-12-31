import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return <div className={"navbar"} id={expandNavbar ? "open" : "closed"}>
        <div className={"toggleButton"}>
            <button
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}
            >
                <ReorderIcon />
            </button>
        </div>
        <div className={"links"}>
            <Link to={"/"}>Home</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/experience"}>Experience</Link>
            <Link to={"https://drive.google.com/file/d/1jZgJF5OwHVgFjhhmRMe70snePHiLERDJ/view?usp=share_link"}>Resume</Link>
            <Link to={"/contactme"}>Contact me</Link>
        </div>
    </div>;
}

export default Navbar;
