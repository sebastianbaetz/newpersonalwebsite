import knear from "../assets/images/knearest.png";
import web from "../assets/images/http.png";
import lime from "../assets/images/LIMEImageAfter.png";
import freecell from "../assets/images/Solitaire.png";
import website from "../assets/images/Website.png";
import xkcd from "../assets/images/XKCD.png";
import maze from "../assets/images/MazeGenSolve.png";
import flood from "../assets/images/Floodit.png";
import mastermind from "../assets/images/Mastermind.png";

export const ProjectList = [
    {
        name: "K Nearest Neighbors Machine Learning Algorithm",
        image: knear,
        skills: "Python, Machine Learning, Data Manipulation",
        desc: "This was my first ever data science project. We were tasked with choosing one of the top machine learning algorithms from an academic paper, and writing it out ourselves. I chose K Nearest Neighbors as it seemed the most practical with some datasets I was working with (pima Native Americans' diabetes dataset, University of California Irvine heart disease dataset). \n" +
            "\n" +
            "In the end, this was a very memorable project for me, it was not easy at all despite it being a simple algorithm, but that made it stick with me very well."
    },
    {
        name: "Webcrawler",
        image: web,
        skills: "Python, Websockets, HTTP Requests",
        desc: "Written in Python, this was an academic project to challenge us to write all the HTTP requests ourselves. It required thorough examination of the headers used to connect in a web browser to the fake social media network we used. The catch was that there were tens of thousands of profile pages, and we needed to turn in a working crawler with it."
    },
    {
        name: "LIME: Layered Image Manipulation and Enhancement",
        image: lime,
        skills: "Java, Design Patterns, SOLID Principles, Test Driven Development, Input Sanitization",
        desc: "LIME is the second project from my Object-Oriented Design class (CS 3500). It uses a Java Swing GUI to display certain image manipulation features to the user. Some features are sharpen/blur, greyscale/sepia, multi-layer image import/export, and PNG/JPEG support. \n" +
            "\n\n" +
            "This project was a great learning experience for me because I learned how to add to and test a large codebase (much larger than I have previously worked with) that I co-wrote. Additionally, this project stressed the importance of good design choices, as information would be omitted about what we need to do until it would certainly break bad designs. Throughout this assignment, I believe our design choices were well thought out. \n" +
            "\n\n" +
            "Most recently (mid 2022), I have been using this project as a sandbox to practice design patterns and experiment seeing where some are beneficial and some are harmful to the code. Being such a large codebase, it seems very applicable to industry style programming."
    },
    {
        name: "Freecell Solitaire",
        image: freecell,
        skills: "Java, Design Patterns, SOLID Principles, Test Driven Development, Input Sanitization",
        desc: "This text-based freecell solitaire game was my first Object-Oriented Design (CS 3500) project. We were assigned parts of this project over three waves, each following wave would determine if we made the correct design choices. Along the way I made tweaks to my initial design to fit SOLID principles. The biggest challenge of this project for me was keeping the game rules to fit the standard freecell game, while simultaneously allowing for the possiblility of some new solitaire game to be added in the future, open to extension but closed for modification. \n" +
            "\n" +
            "This project also introduced me to JUnit testing, which I used very heavily in my test-driven development from this point on. I found it to be a necessity to ensure my code worked as intended, and always wrote tests first, then started the program logic."
    },
    {
        name: "My Website",
        image: website,
        skills: "HTML, CSS, JS, React, Hosting",
        desc: "This is the website you are currently on! I created this to show off my projects and taught myself how to create a website in the meantime. It's a simple HTML/CSS webpage with a single cosmetic JS app, that I am currently in the process of making responsive. I enjoyed the process very much and constantly work to improve the site."
    },
    {
        name: "XKCD Password Generator",
        image: xkcd,
        skills: "Python, Security",
        desc: "This project was based off of the XKCD Comic found here for an assignment in my Cybersecurity class. This was my first academic project in Python, and especially so using the argParse library to accommodate command line behaviour. While this was a smaller project, I enjoyed it very much. We were given the liberty of choosing any language for this assignment, and I wanted to use it to reinforce the Python I learned previously."
    },
    {
        name: "Maze Generator and Breadth-First/Depth-First Search Solver",
        image: maze,
        skills: "Java, External Graphics Libraries, Search Algorithms",
        desc: "This was the final project for my Fundamentals of CS II class. Initially, this project used Kruskal's Algorithm to generate minimum spanning trees which are perfect for maze generation. This was expanded with a new requirement: implement depth-first and breadth-first searching on this maze. My partner and I bolstered our previous design for extra credit by creating hexagonal mazes as a feature by pressing 'h'. Regular square mazes are default."
    },
    {
        name: "FloodIt",
        image: flood,
        skills: "Java, External Graphics Libraries",
        desc: "Floodit is a game where you start off in the top left corner, and must turn the entire board that color in the limited number of moves. Similar to Mastermind (next), this was also a challenge working with the image library to manipulate the colors the way we needed. Ultimately, we were successful using it, and managed to get extra credit as well."
    },
    {
        name: "MasterMind",
        image: mastermind,
        skills: "Java, External Graphics Libraries",
        desc: "Mastermind is a single-player game where you must solve the hidden code, using nothing more to help than the hints received pertaining to direct matches and indirect matches. This project was a big challenge for my partner and I because of the image library that we needed to work with, but it served as a great lesson into using third-party Java libraries."
    }
];