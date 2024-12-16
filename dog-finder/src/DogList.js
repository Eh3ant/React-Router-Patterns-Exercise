import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <div>
            <h1>Meet our Dogs!</h1>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.name}>
                        <Link to={`/dogs/${dog.name}`}>
                            <img src={dog.src} alt={dog.name} width="100" />
                            <p>{dog.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DogList;
