// Импорт функционала
import { React, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Импорт компонентов
import Header from "../components/Header";
import CharacterCard from "../components/MainPage/CharacterCard";
import GroupCard from "../components/MainPage/GroupCard";
import AccentButton from "../components/UI/AccentButton";
import DiceRoller from "../components/DiceRoller/DiceRoller";

// Импорт контекста
import { UserContext } from "../App";  // Контекст авторизованного пользователя


const MainPage = () => {
    const {user, setUser} = useContext(UserContext);  // Подгружаем контекст авторизованного пользователя
    
    const [listOfCharacters, setListOfCharacters] = useState([]);  // Состояние списка персонажей пользователя
    const [listOfGroups, setListOfGroups] = useState([]);  // Cостояние групп, в которых находится пользователь

    // Срабатывает однажды при загрузке страницы
    useEffect(() => {
        if (user != null) {
            axios.get('http://localhost:8000/character/uid/' + user.user_id)  // Получаем персонажей по айди авторизованного пользователя
            .then((response) => {
                setListOfCharacters(response.data.characters);
            })
            .catch((error) => {
                console.log(error);
            });

            axios.get('http://localhost:8000/group/user/' + user.user_id)  // Получаем персонажей по айди авторизованного пользователя
            .then((response) => {
                setListOfGroups(response.data.body);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, []);
    
    return (
        <>
            <Header />

            {user === null  // Проверяем, авторизован пользователь или нет
                ?
                <div>Пожалуйста авторизуйтесь</div>
                :
                <>
                    <DiceRoller />

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
                                    <GroupCard key={i} group={item} />
                                );
                            })}
                        </ul>
                    </div>            
                </>   
            }
        </>
    );
}

export default MainPage;