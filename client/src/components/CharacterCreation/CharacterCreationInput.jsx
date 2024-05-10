import React from "react";

const CharacterCreationInput = ({ title, setProperty }) => {
    return (
        <>
            <div className='input-form'>
                <label className="input-inside-flex">
                    {title}:
                    <textarea className='input' type='text' onChange={(e) => {setProperty(e.target.value)}} />
                </label>
            </div>
        </>
    );
};

export default CharacterCreationInput;