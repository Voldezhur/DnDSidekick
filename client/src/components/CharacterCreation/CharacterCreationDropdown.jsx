import React from "react";

const CharacterCreationDropdown = ({ title, property, setProperty, optionsList }) => {
    return (
        <>
            <div className='input-form'>
                <label className="input-inside-flex">
                    {title}:
                    <select onChange={(e) => {setProperty(property, e.target.value)}}>
                        {optionsList.map((option) => {
                            return (
                                <option value={option}>{option}</option>
                            );
                        })}
                    </select>
                </label>
            </div>
        </>
    );
}

export default CharacterCreationDropdown;