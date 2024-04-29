import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import CharacterCard from "../components/MainPage/CharacterCard";
import GroupCard from "../components/MainPage/GroupCard";
import AccentButton from "../components/UI/AccentButton";

import axios from "axios";
import { Link } from "react-router-dom";

const MainPage = () => {
    const [listOfCharacters, setListOfCharacters] = useState([]);
    const [listOfGroups, setListOfGroups] = useState([
        {
            'name': 'XTH'
        }
    ]);

    // Срабатывает однажды при загрузке страницы
    useEffect(() => {
        // Впоследствии заменить 1 айди авторизованного пользователя
        axios.get('http://localhost:8000/character/uid/1')
        .then((response) => {
            setListOfCharacters(response.data.characters);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    return (
        <>
            <Header />

            <div className="main-page-flex">
                <ul className="character-list">
                    {listOfCharacters.map((item) => {
                        return (
                            <CharacterCard key={item.character_id} character={item} />
                        );
                    })}
                    <li>
                        <Link to='/characterCreation' className="page-link">
                            <AccentButton title="Создать нового персонажа" className="add-button" />
                        </Link>
                    </li>
                </ul>

                <ul className="group-list">
                    {listOfGroups.map((item, i) => {
                        return (
                            <GroupCard key={i} />
                        );
                    })}
                </ul>
            </div>            
        </>
    );
}

export default MainPage;