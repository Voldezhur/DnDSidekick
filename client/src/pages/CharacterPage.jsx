import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import Header from "../components/Header";
import CharacterSheet from "../components/CharacterPage/CharacterSheet";

function App() {
    let { characterId } = useParams();  // Получаем айди персонажа из параметров url
    
    const [character, setCharacter] = useState({});  // Состояние, в котором хранится персонаж

    const navigate = useNavigate();  // Для переключения на домашнюю страницу после удаления персонажа

    // Получение персонажа по айди
    // Срабатывает однажды при загрузке страницы
    useEffect(() => {
        // Впоследствии заменить 1 айди авторизованного пользователя
        axios.get('http://localhost:8000/character/character_id/' + characterId)
        .then((response) => {
            setCharacter(response.data.body);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [characterId]);

    // Функция удаления персонажа и последующего перехода на главную
    const deleteCharacter = async () => {
        axios.delete('http://localhost:8000/character/deleteCharacter/' + characterId)
        .then(() => {navigate('/mainPage')})
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Header />
            {/* <p className="title">{String(character.character_sheet.name)}</p> */}
            <div className="character-page-flex">
            </div>
            <button className="button-delete-character" onClick={deleteCharacter}>Удалить персонажа</button>
        </>
    );
}

export default App;