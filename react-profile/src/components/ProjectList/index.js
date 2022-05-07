import React, { useState } from 'react';

const ProjectList = ({ category }) => {
    const [projects] =  useState([
        {
            name: 'Grocery aisle', 
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    const currentProject = projects.filter(project => project.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentProject.map((image, i) => (
                   <img 
                   src={require(`../../Assets/projectimg/${category}/${i}.jpg`)}
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