import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Header from "../components/Header";
import CharacterSheet from "../components/CharacterSheet";

function App() {
    let { characterId } = useParams();
    
    const [character, setCharacter] = useState({});

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
    }, []);

    const deleteCharacter = () => {

    }

    return (
        <>
            <Header />
            <div className="character-page-flex">
                <CharacterSheet character={character} />
            </div>
            <button className="button-delete-character" onClick={deleteCharacter}>Удалить персонажа</button>
        </>
    );
}

export default App;