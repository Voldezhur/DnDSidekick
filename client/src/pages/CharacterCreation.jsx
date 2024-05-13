// Импорт функционала
import { React, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Импорт компонентов
import Header from "../components/Header";
import CharacterCreationInput from "../components/CharacterCreation/CharacterCreationInput";
import CharacterCreationDropdown from "../components/CharacterCreation/CharacterCreationDropdown";
import CharacterCreationAbilities from "../components/CharacterCreation/CharacterCreationAbilities";
import DiceRoller from "../components/DiceRoller/DiceRoller";

// Импорт контекста
import { UserContext } from "../App";  // Контекст авторизованного пользователя

const CharacterCreation = () => {
    const {user} = useContext(UserContext);  // Подгружаем контекст авторизованного пользователя
    
    // Списки возможных опций для создания персонажа
    const [racesList, setRacesList] = useState([]);
    const [classesList, setClassesList] = useState([]);
    const [armorList, setArmorList] = useState([]);
    const [weaponsList, setWeaponsList] = useState([]);
    
    // Состояния нового персонажа
    const [name, setName] = useState('new_character');
    const [background, setBackground] = useState('new_background');
    const [race, setRace] = useState(racesList[0]);
    const [characterClass, setCharacterClass] = useState(classesList[0]);
    
    // Состояния атрибутов
    const [strength, setStrength] = useState({score: 10, modifier: 0});
    const [dexterity, setDexterity] = useState({score: 10, modifier: 0});
    const [constitution, setConstitution] = useState({score: 10, modifier: 0});
    const [intelligence, setIntelligence] = useState({score: 10, modifier: 0});
    const [wisdom, setWisdom] = useState({score: 10, modifier: 0});
    const [charisma, setCharisma] = useState({score: 10, modifier: 0});
    const [armor, setArmor] = useState(0);
    const [weapon, setWeapon] = useState(0);

    // Состояния загрузки данных
    const [racesLoading, setRacesLoading] = useState(true);
    const [classesLoading, setClassesLoading] = useState(true);
    const [armorLoading, setArmorLoading] = useState(true);
    const [weaponsLoading, setWeaponsLoading] = useState(true);

    // Подгрузка данных
    // Срабатывает однажды при загрузке страницы
    useEffect(() => {
        // Функция отправки запроса к серверу по получению списка рас
        const getRaces = async () => {
            try {
                const response = await axios.get("http://localhost:8000/compendium/races/list");
                return response.data.body;
            } catch (error) {
                console.log(error);
            }
        }

        // Функция отправки запроса к серверу по получению списка классов
        const getClasses = async () => {
            try {
                const response = await axios.get("http://localhost:8000/compendium/classes/list");
                return response.data.body;
            } catch (error) {
                console.log(error);
            }
        }
        
        // Функция отправки запроса к серверу по получению списка брони
        const getArmor = async () => {
            try {
                const response = await axios.get("http://localhost:8000/compendium/armor/list");
                return response.data.body;
            } catch (error) {
                console.log(error);
            }
        }
        
        // Функция отправки запроса к серверу по получению списка оружия
        const getWeapons = async () => {
            try {
                const response = await axios.get("http://localhost:8000/compendium/weapons/list");
                return response.data.body;
            } catch (error) {
                console.log(error);
            }
        }

        // Функция по присваиванию состояния списка рас
        const fetchRaces = async () => {
            await getRaces()
            .then (fetchedRaces => {
                setRacesList(fetchedRaces);
                setRacesLoading(false);
            });
        }

        // Функция по присваиванию состояния списка классов
        const fetchClasses = async () => {
            await getClasses()
            .then (fetchedClasses => {
                setClassesList(fetchedClasses);
                setClassesLoading(false);
            });
        }
        
        // Функция по присваиванию состояния списка брони
        const fetchArmor = async () => {
            await getArmor()
            .then (fetchedArmor => {
                setArmorList(fetchedArmor);
                setArmorLoading(false);
            });
        }

        // Функция по присваиванию состояния списка оружия
        const fetchWeapons = async () => {
            await getWeapons()
            .then (fetchedWeapons => {
                setWeaponsList(fetchedWeapons);
                setWeaponsLoading(false);
            });
        }
        
        fetchRaces();
        fetchClasses();
        fetchArmor();
        fetchWeapons();
    }, []);

    // Для перехода на главную после создания персонажа
    const navigate = useNavigate();

    // Функция для сохранения персонажа в базу данных
    const saveCharacter = () => {
        const characterSheet = {
            name: name,
            background: background,
            race_id: race,
            class_id: characterClass,
            ability_scores: {
                strength: strength,
                dexterity: dexterity,
                constitution: constitution,
                intelligence: intelligence,
                wisdom: wisdom,
                charisma: charisma
            },
            equipment: {
                armor: armor,
                weapon: weapon
            }
        }

        console.log(characterSheet);
        
        axios.post('http://localhost:8000/character/newCharacter', {creator_id: user.user_id, character_sheet: characterSheet})  // Сохраняем персонажа с айди авторизованного пользователя
        .then((response) => {
            console.log(response);
            navigate('/home');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Header />

            <DiceRoller />

            {/*
                Первый шаг создания персонажа:
                . Имя
                . Краткая предыстория
            */}
        
            <p className="section-title">Шаг 1. Имя и предыстория</p>

            <div className="step-flex">
                <div className="inputs-flex">
                    <CharacterCreationInput title='Имя' setProperty={setName} />
                    <CharacterCreationInput title='Предыстория' setProperty={setBackground} />
                </div>
                <div className="step-info">
                    <p className="step-info-title">Как у каждой истории есть начало, так и у каждого персонажа есть имя и предыстория</p>
                    <p>. Имя - имя вашего персонажа</p>
                    <p>. Предыстория - то, чем ваш персонаж занимался до того, как отправился на приключения.</p>
                </div>
            </div>

            {/*
                Второй шаг создания персонажа:
                . Раса
                . Класс
            */}

            <p className="section-title">Шаг 2. Раса и класс</p>

            <div className="step-flex">
                <div className="inputs-flex">
                    {/* Ждем загрузки из базы данных и потом рендерим */}
                    {!racesLoading &&
                        <CharacterCreationDropdown title='Раса' setProperty={setRace} optionsList={racesList} />
                    }
                    {!classesLoading &&
                        <CharacterCreationDropdown title='Класс' setProperty={setCharacterClass} optionsList={classesList} />
                    }
                </div>
                <div className="step-info">
                    <p className="step-info-title">Класс и раса определяют то, на что способен ваш персонаж, какими способностями обладает, а также его внешний вид</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices sagittis justo. Vestibulum commodo id enim at placerat
                </div>
            </div>     

            {/* 
                Третий шаг создания персонажа:
                . Атрибуты
            */}

            <p className="section-title">Шаг 3. Атрибуты</p>

            <div className="step-flex">
                <div className="inputs-flex">
                    <CharacterCreationAbilities setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} />
                </div>
                <div className="step-info">
                    <p className="step-info-title">Начинается интересное: при выборе своих атрибутов вы выбираете то, в чем ваш персонаж разбирается лучше, в чем силен</p>
                    Случайно кидается 4 кубика д6, после чего отсеивается меньшее значение. Так делается 6 раз. Полученные значения вы можете распределить между атрибутами
                </div>
            </div>

            {/* 
                Четвертый шаг создания персонажа:
                . Экипировка
             */}

            <p className="section-title">Шаг 4. Экипировка</p>

            <div className="step-flex">
                <div className="inputs-flex">
                    {/* Ждем загрузки из базы данных и потом рендерим */}
                    {!armorLoading &&
                        <CharacterCreationDropdown title='Доспех' setProperty={setArmor} optionsList={armorList} />
                    }
                    {!weaponsLoading &&
                        <CharacterCreationDropdown title='Оружие' setProperty={setWeapon} optionsList={weaponsList} />
                    }
                </div>
                <div className="step-info">
                    <p className="step-info-title">Для каждого героя важна его экипировка. Она отвечает за класс брони и урон, который вы способны нанести врагам</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices sagittis justo. Vestibulum commodo id enim at placerat
                </div>
            </div> 

            {/* Сохранение персонажа */}

            <div className="save-button-flex">
                <button onClick={saveCharacter}>Сохранить персонажа</button>
            </div>
        </>
    );
}

export default CharacterCreation;