import React, { useState } from "react";

const CharacterCreationDropdown = ({ title, setProperty, optionsList }) => {
    const [listOfOptions, setListOfOptions] = useState(optionsList);

    if (typeof listOfOptions[0] == 'object') {
        const newList = listOfOptions.map(x => x.name);
        setListOfOptions(newList);
    }
    
    return (
        <>
            <div className='input-form'>
                <label className="input-inside-flex">
                    {title}:
                    <select onChange={(e) => {setProperty(e.target.value)}}>
                        {listOfOptions.map((option, i) => {
                            return (
                                // <option key={i} value={optionsList.filter(x => {return x.name === option})[0]}>{option}</option>
                                <option key={i} value={option}>{option}</option>
                            );
                        })}
                    </select>
                </label>
            </div>
        </>
    );
}

export default CharacterCreationDropdown;