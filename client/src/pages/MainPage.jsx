// Импорт функционала
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

// Импорт компонентов
import Header from "../components/Header";
import CharacterCard from "../components/MainPage/CharacterCard";
import GroupCard from "../components/MainPage/GroupCard";
import AccentButton from "../components/UI/AccentButton";
import DiceRoller from "../components/DiceRoller/DiceRoller";


const MainPage = () => {
    const [cookies] = useCookies();  // Подгружаем куки

    const [listOfCharacters, setListOfCharacters] = useState([]);  // Состояние списка персонажей пользователя
    const [listOfGroups, setListOfGroups] = useState([]);  // Cостояние групп, в которых находится пользователь

    // Срабатывает однажды при загрузке страницы
    useEffect(() => {
        const user = cookies.user;
        
        if (user != null) {
            // Получаем список персонажей пользователя
            axios.get('http://localhost:8000/character/uid/' + user.user_id)
            .then((response) => {
                setListOfCharacters(response.data.characters);
            })
            .catch((error) => {
                console.log(error);
            });

            // Получаем список групп пользователя - где у него есть персонажи, и где он ДМ
            axios.get('http://localhost:8000/group/user/' + user.user_id)
            .then((response) => {
                setListOfGroups(response.data.body);

                axios.get('http://localhost:8000/group/dm/' + user.user_id)
                .then((response) => {
                    setListOfGroups([...listOfGroups, ...response.data.body]);
                })
                .catch((error) => {
                    console.log(error);
                });
            })
            .catch((error) => {
                console.log(error);
            });

        }
    }, [cookies.user]);
    
    return (
        <>
            <Header />

            {cookies.user === null  // Проверяем, авторизован пользователь или нет
                ?
                <div>Пожалуйста авторизуйтесь</div>
                :
                <>
                    <DiceRoller />

                    <div className="main-page-flex">
                        <ul className="character-list">
                            <li>
                                <div className="list-title">Персонажи</div>
                            </li>
                            {listOfCharacters.map((item, i) => {
                                return (
                                    <CharacterCard key={i} character={item} />
                                );
                            })}
                            <li>
                                <Link to='/characterCreation' className="page-link">
                                    <AccentButton title="Создать нового персонажа" className="add-button" />
                                </Link>
                            </li>
                        </ul>

                        <ul className="group-list">
                            <li>
                                <div className="list-title">Группы</div>
                            </li>
                            {listOfGroups.map((item, i) => {
                                return (
                                    <GroupCard key={i} group={item} />
                                );
                            })}
                            <li>
                                {/* <div className="group-buttons"> */}
                                    <Link to='/groupCreation' className="group-button">
                                        <AccentButton title="Создать группу" className="add-button" />
                                    </Link>
                                    {/* <Link to='/groupJoin' className="group-button">
                                        <AccentButton title="Присоединиться к группе" className="add-button" />
                                    </Link> */}
                                {/* </div> */}
                            </li>
                        </ul>
                    </div>            
                </>   
            }
        </>
    );
}

export default MainPage;