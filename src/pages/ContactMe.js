
import React from "react";
import "../styles/ContactMe.css"

function ContactMe() {
    return (
        <div className={"contactMe"}>
            <h2>Contact me</h2>

            <p>If you would like to discuss further, provide feedback, or just chat, my preferred method of communication is email. You can reach me at <a href={"mailto:baetz.s@northeastern.edu"}>baetz.s@northeastern.edu</a>.
                If you would like to look at my GitHub or follow me on LinkedIn, you can click the respective button in the footer! Thank you for your visit!</p>
        </div>
    );
}

export default ContactMe;