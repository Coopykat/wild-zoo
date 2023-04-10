import React from 'react';
import './Animal.css';

function Animal({name, species, age, image}) {
    return (
        <div className="Animal">
            <div className="animals-cards">
            <img className="animal-image" src={image} alt={name}   />       
                <div className="animal-desc">
                    <h3>{name}</h3>
                    <span>Espèce: {species}</span>
                    <span>Àge: {age}</span>
                    </div> 
             </div>
        </div>

    )
}

export default Animal;