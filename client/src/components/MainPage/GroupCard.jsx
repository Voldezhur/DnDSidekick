// Импорт функционала
import { React, useState, useEffect } from "react";
import axios from "axios";

const GroupCard = ({ group }) => {
    const [listOfCharacters, setListOfCharacters] = useState([]);
    
    // Срабатывает однажды при загрузке страницы
    useEffect(() => {
        axios.get('http://localhost:8000/character/characters_in_group/' + group.group_id)  // Получаем персонажей по айди авторизованного пользователя
        .then((response) => {
            setListOfCharacters(response.data.body);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    return (
        <li className="group-card">
            <div className="group-info">
                <h1>{group.group_name}</h1>
                <h1>DM: {group.dm_id}</h1>
            </div>
            <div className="list-of-characters">
                {listOfCharacters.map((item, i) => {
                    return(
                        <p key={i} className="character-in-group">{item.character_sheet.name}</p>
                    );
                })}
            </div>
        </li>
    );
}

export default GroupCard;