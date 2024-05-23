// Импорт функционала
import { React, useState } from "react";


const AddingCharacters = () => {
    const [addedCharacters, setAddedCharacters] = useState([]);
    
    return(
        <div className="character-adding-flex">
            <div className="character-code-input">
                <div>Введите код персонажа</div>
                <input></input>
                <button>Добавить</button>
            </div>
            <div className="added-characters-list">
                {addedCharacters.map((item, i) => {
                    return <div key={i}>персонаж</div>
                })}
            </div>
        </div>
    )
}

export default AddingCharacters;