import React from "react";

const CharacterCreationDropdown = ({ title, setProperty, optionsList }) => {
    const newOptions = ['', ...optionsList];
    
    return (
        <>
            <div className='input-form'>
                <label className="input-inside-flex">
                    {title}:
                    <select onChange={(e) => {setProperty(e.target.value)}}>
                        {newOptions.map((option, i) => {
                            return (
                                <option key={i} value={option.id}>{option.name}</option>
                            );
                        })}
                    </select>
                </label>
            </div>
        </>
    );
}

export default CharacterCreationDropdown;