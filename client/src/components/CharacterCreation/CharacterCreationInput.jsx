import React, { useState } from "react";

const CharacterCreationInput = ({ title, property, setProperty }) => {
    const [value, setValue] = useState(null);
    
    // Функция для обновления данных листа персонажа
    const handleSubmit = (event) => {
        event.preventDefault();
        setProperty(property, value);
    }

    // Переделать, чтобы была не форма, а просто при каждом изменении ввода оно записывалось в json    
    return (
        <>
            <form className='input-form' onSubmit={handleSubmit}>
                <label className="input-inside-flex">
                    {title}:
                    <input type='text' onChange={(e) => {setValue(e.target.value)}} />
                </label>
                <button type="submit">Отправить</button>
            </form>
        </>
    );
};

export default CharacterCreationInput;