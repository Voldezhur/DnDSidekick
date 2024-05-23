// Импорт функционала
import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Импорт компонентов
import Header from "../components/Header";
import CharacterSheet from "../components/CharacterPage/CharacterSheet";
import DiceRoller from "../components/DiceRoller/DiceRoller";


function App() {
    let { characterId } = useParams();  // Получаем айди персонажа из параметров url
    
    const [character, setCharacter] = useState({});  // Состояние, в котором хранится персонаж
    const [isLoading, setIsLoading] = useState(true);  // Состояние подгрузки данных о персонаже с сервера

    const navigate = useNavigate();  // Для переключения на домашнюю страницу после удаления персонажа

    // Подгрузка данных
    // Срабатывает однажды при загрузке страницы
    useEffect(() => {
        // Функция отправки запроса к серверу по получению персонажа
        const getCharacter = async () => {
            try {
                const response = await axios.get("http://localhost:8000/character/character_id/" + characterId);
                return response.data.body;
            } catch (error) {
                console.log(error);
            }
        }

        // Функция по присваиваниию состояния character полученных данных
        const fetchCharacter = async () => {
            await getCharacter()
            .then (fetchedCharacter => {
                setCharacter(fetchedCharacter);
                setIsLoading(false);
            });
        }
        
        fetchCharacter();
    }, [characterId]);

    // Функция удаления персонажа и последующего перехода на главную
    const deleteCharacter = async () => {
        axios.delete('http://localhost:8000/character/deleteCharacter/' + characterId)
        .then(() => {navigate('/home')})
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Header />
            <DiceRoller />
            <p className="title">{isLoading ? "Загрузка" : String(character.name)}</p>
            <div className="character-page-flex">
                <CharacterSheet character={character} isLoading={isLoading}  />
            </div>

            <div className="buttons-flex">
                <button onClick={() => {navigate('/home')}}>Назад</button>
                <button onClick={deleteCharacter}>Удалить персонажа</button>
            </div>
        </>
    );
}

export default App;