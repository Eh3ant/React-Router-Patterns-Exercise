import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find((d) => d.name === name);

    if (!dog) return <Navigate to="/dogs" />;

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} width="200" />
            <p>Age: {dog.age}</p>
            <ul>
                {dog.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Back to all dogs</Link>
        </div>
    );
}

export default DogDetails;
