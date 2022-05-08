import React, { useState } from 'react';

const ProjectList = ({ category }) => {
    const [projects] =  useState([
        {
            name: 'Run-Buddy', 
            category: 'project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Million Dollar Dream',
            category: 'project',
            description: 'A web application using Express, Node.js, CSS, HTML, JavaScript, and RESTful APIs for the sole purpose of tracking crypto and stocks.'
        },
        {
            name: 'Gym Quest',
            category: 'project',
            description: 'This project was created using CSS, HTML, JavaScript, Model View Controller, HandleBars, MySQL, and Sequelize. Gym Quest is a workout site that allows for community building among the gym community.'
        },
        {
            name: 'PizzaHunt',
            category: 'project',
            description: 'The PizzaHunt app uses Mongoose, MongoDB, IndexedDB, CSS, HTML and JavaScript. PizzaHunt allows for creating pizzas and allowing users to comment and reply to posts.'
        }
    ]);

    const currentProjects = projects.filter(project => project.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentProjects.map((image, i) => (
                   <img 
                   src={require(`../../assets/projectimg/${category}/${i}.png`).default}
                   alt={image.name}
                   className="img-thumbnail mx-1"
                   key={image.name}
                  />
                ))}           
            </div>
        </div>
    );
};

export default ProjectList;