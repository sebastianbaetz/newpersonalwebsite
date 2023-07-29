
import React from "react";

import "../styles/Home.css";
import sebastianHeadshot from "../assets/images/white.jpg"
import sebastianPersonal from "../assets/images/sebastian.png";
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className={"home"}>
            <div className={"about"}>
                <div className={"sbs-home-container"}>
                    <div className={"prompt"}>
                        <h2>Hello world!</h2>
                        <p>
                            Hi! I'm Sebastian. Welcome to my website detailing my journey as a software engineer and
                            my portfolio of personal and academic projects.
                        </p>
                    </div>
                    <div className={"picture"}>
                        <img src={sebastianHeadshot} width={250} height={250} alt={"Sebastian's headshot outside in front of a mountain"}/>
                    </div>
                </div>
                </div>
                <div className={"socialMediaHome"}>
                    <Link to={"https://www.linkedin.com/in/sebastianbaetz/"}> <LinkedIn /> </Link>
                    <Link to={"mailto:baetz.s@northeastern.edu"}> <Email /> </Link>
                    <Link to={"https://github.com/sebastianbaetz"}> <GitHub /> </Link>
                </div>

            <hr />

            <div className={"sbs-home-container"}>
                <div className={"picture picture-right-pad"}>
                    <img src={sebastianPersonal} width={250} height={250} alt={"Sebastian's headshot outside in front of a mountain"}/>
                </div>
                <div className={"biography"}>
                    <h1> A bit about me </h1>
                    <p>
                        Howdy! My name is Sebastian Baetz and I am entering my final year at Northeastern University. I am involved in a few clubs! Notably, the Hus-skiers and outing club, and the Latin American Student Organization. I am from San Antonio, Texas.

                        <br /> <br />

                        I have worked as a full-stack software engineer co-op at eMoney Advisor and at Travelers for over a year of experience, as well as a teaching assistant for CS1800 Discrete Structures for Khoury College at Northeastern University Fall 2021, and Fall 2022. I would love for you to learn more about those experiences
                        <Link to={"/experience"}
                              onClick={() => {
                                  window.scroll(0, 0);
                              }}
                        > here</Link>.

                        <br /> <br />

                        My favorite language to work in is Java, and I have picked up .NET, React, Python, C, Assembly, and SQL while pursuing projects which you can find out more about
                        <Link to={"/projects"}
                              onClick={() => {
                                window.scroll(0, 0);
                        }}
                        > here</Link>.

                        <br /> <br />

                        Outside of tech, I am an avid golfer, cyclist, cook, and somebody who loves to teach and help others.

                        <br /> <br />

                        I am currently looking for full-time positions starting after I graduate (May 2024). If you would like to learn more about me,
                        <Link to={"/"}
                              onClick={() => {
                                  window.scroll(0, 0);
                              }}
                        > here is my resume</Link>, and if you would like to have a chat, feel free to

                        <Link to={"/contactme"}
                              onClick={() => {
                                window.scroll(0, 0);
                        }}> contact me here</Link>.

                        <br /> <br />

                        I am looking forward to meeting you!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;