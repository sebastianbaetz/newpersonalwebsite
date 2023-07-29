
import React from "react";
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import "../styles/Footer.css"
import {Link} from "react-router-dom";

function Footer() {
    return (
    <div className={"footer"}>
        <p>Sebastian Baetz</p>
        <div className={"socialMedia"}>
            <Link to={"https://www.linkedin.com/in/sebastianbaetz/"}> <LinkedIn /> </Link>
            <Link to={"mailto:baetz.s@northeastern.edu"}> <Email /> </Link>
            <Link to={"https://github.com/sebastianbaetz"}> <GitHub /> </Link>
        </div>
        <p> Made with love in San Antonio, Texas </p>
        <p> &copy; 2022 sebastianbaetz.com</p>
    </div>
    );
}

export default Footer;