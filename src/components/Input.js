import React from 'react';
import './Input.css';

export default function Input({
    type,
    placeholder,

}) {
    return (
        <div className="input-container">
            <input type={type} placeholder={placeholder} className="input" />
        </div>
    )
}
