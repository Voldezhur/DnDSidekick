import React from "react";

const CharacterCreationInput = ({ title, property, setProperty }) => {
    return (
        <>
            <div className='input-form'>
                <label className="input-inside-flex">
                    {title}:
                    <textarea className='input' type='text' onChange={(e) => {setProperty(property, e.target.value)}} />
                </label>
            </div>
        </>
    );
};

export default CharacterCreationInput;