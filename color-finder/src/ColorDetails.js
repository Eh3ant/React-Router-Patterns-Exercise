import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import './ColorDetails.css';

const ColorDetails = ({ colors }) => {

    const { color } = useParams()
    const selectedColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase());

    if (!selectedColor) {
        return <Navigate to="/colors" />;
    }
    return (
        <div
            className="color-display"
            style={{ backgroundColor: selectedColor.value }}
        >
            <h1 className="color-title">{selectedColor.name}</h1>
            <p className="color-description">
                This is the beautiful color {selectedColor.name}.
            </p>
            <Link to="/colors" className="back-link">
                Go Back
            </Link>
        </div>
    );
};

export default ColorDetails;


