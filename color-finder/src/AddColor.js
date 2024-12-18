import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddColor.css';

const AddColor = ({ addColor }) => {
    const [formData, setFormData] = useState({
        name: "",
        value: "#000000"
    });

    const navigate = useNavigate();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor(formData);
        navigate("/colors");
    };

    return (
        <div className="add-color-container">
            <h2 className="add-color-title">Add a New Color</h2>
            <form onSubmit={handleSubmit} className="add-color-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Color Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter a name for the color"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="value" className="form-label">Color Picker:</label>
                    <input
                        type="color"
                        name="value"
                        className="form-color-picker"
                        value={formData.value}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="form-button">Add Color</button>
            </form>
        </div>
    );
};

export default AddColor;
