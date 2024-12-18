import React from 'react';
import { Link } from 'react-router-dom';
import './Colors.css';

const Colors = ({ colors }) => {
    return (
        <div className="colors-container">
            <h1 className="colors-title">Welcome to the Color Factory!</h1>
            <Link to="/colors/new" className="add-color-link">
                Add a New Color
            </Link>
            <p className="colors-subtitle">Please select a color:</p>
            <ul className="colors-list">
                {colors.map((color, idx) => (
                    <li key={idx} className="color-item">
                        <Link to={`/colors/${color.name}`} className="color-link">
                            {color.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Colors;
