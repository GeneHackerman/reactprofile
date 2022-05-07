import React from 'react';
import coverImage from "../../Assets/cover/cyberspace.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "50%", margin: "20px" }} alt="cover" />
            <div className="my-2">
            <p>
                Welcome to my portfolio page using REACT.js! 
            </p>
            </div>

        </section>
    );
}

export default About;
