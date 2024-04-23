import React from "react";

const CharacterCreationDropdown = ({ title, property, setProperty }) => {
    return (
        <>
            <div className='input-form'>
                <label className="input-inside-flex">
                    {title}:
                    <input type='text' onChange={(e) => {setProperty(property, e.target.value)}} />
                </label>
            </div>
        </>
    );
}

export default CharacterCreationDropdown;