import React from 'react';
import coverImage from "../../assets/cover/cyberspace.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "75%" }} alt="cover" />
            <div className="my-2">
            <p>
                Hello, my name is Rafael Arias and welcome to my portfolio page created with REACT.js! 
            </p>
            <p>
                I am currently a bootcamp student and will be graduating on May 26th, 2022. 
                After the bootcamp is over, I am hoping to get my foot through the door within the industry as a full-stack engineer.
                Thanks to the bootcmap, I collaborated with other students to create front-end and full-stack projects. 
            </p>
            </div>

        </section>
    );
}

export default About;
