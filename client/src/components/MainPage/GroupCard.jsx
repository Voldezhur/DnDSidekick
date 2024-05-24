// Импорт функционала
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const GroupCard = ({ group }) => {
    const [listOfCharacters, setListOfCharacters] = useState([]);
    const [DM, setDM] = useState([]);

    // Срабатывает однажды при загрузке страницы
    useEffect(() => {
        // Получаем список персонажей в группе
        axios.get('http://localhost:8000/character/characters_in_group/' + group.group_id)  // Получаем персонажей по айди авторизованного пользователя
        .then((response) => {
            setListOfCharacters(response.data.body);
        })
        .catch((error) => {
            console.log(error);
        });

        // Получаем ДМа группы
        axios.get('http://localhost:8000/user/user_id/' + group.dm_id)  // Получаем персонажей по айди авторизованного пользователя
        .then((response) => {
            setDM(response.data.user);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [group]);
    
    return (
        <li className="group-card">
            <div className="card-buttons">
                <Link to={"/groupPage/" + group.group_id}>
                    <button>Перейти на страницу</button>
                </Link>
                <button>Удалить группу</button>
            </div>
            <div className="group-info">
                <h1>{group.group_name}</h1>
                <h1>DM: {DM.user_name}</h1>
            </div>
            <div className="list-of-characters">
                {/* {listOfCharacters.map((item, i) => {
                    return(
                        <p key={i} className="character-in-group">{item.character_id}</p>
                    );
                })} */}
            </div>
        </li>
    );
}

export default GroupCard;