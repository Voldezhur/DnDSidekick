// Импорт функционала
import { React, useState, useContext } from "react";
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
    const racesList = ["Человек", "Эльф", "Полуэльф", "Орк", "Полуорк", "Дварф", "Хафлинг", "Гном"];
    const classesList = ["Варвар", "Воин", "Следопыт", "Плут", "Бард", "Паладин", "Жрец", "Волшебник", "Чародей", "Друид"];
    const armorList = [
        {
            name: 'Кожаный доспех',
            type: 'легкий',
            ac: 11
        },
        {
            name: 'Клепаная броня',
            type: 'легкий',
            ac: 12
        },
        {
            name: 'Кольчужная рубаха',
            type: 'средний',
            ac: 13
        },
        {
            name: 'Латы',
            type: 'тяжелый',
            ac: 18
        }
    ];
    const weaponsList = [
        {
            name: 'Кинжал',
            type: 'простое',
            isRanged: false,
            dmg: '1d6',
            dmgType: 'колющий'
        },
        {
            name: 'Длинный лук',
            type: 'воинское',
            isRanged: true,
            range: '150/600',
            dmg: '1d6',
            dmgType: 'колющий'
        },
        {
            name: 'Секира',
            type: 'воинское',
            isRanged: false,
            dmg: '1d12',
            dmgType: 'рубящий'
        },
        {
            name: 'Короткий меч',
            type: 'воинское',
            isRanged: false,
            dmg: '1d6',
            dmgType: 'колющий'
        }
    ];
    
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
    const [armor, setArmor] = useState(armorList[0]);
    const [weapon, setWeapon] = useState(weaponsList[0]);

    // Для перехода на главную после созданиия персонажа
    const navigate = useNavigate();

    // Функция для сохранения персонажа в базу данных
    const saveCharacter = () => {
        const characterSheet = {
            name: name,
            background: background,
            race: race,
            class: characterClass,
            abilityScores: {
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
                    <CharacterCreationDropdown title='Раса' setProperty={setRace} optionsList={racesList} />
                    <CharacterCreationDropdown title='Класс' setProperty={setCharacterClass} optionsList={classesList} />
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
                    <CharacterCreationDropdown title='Доспех' setProperty={setArmor} optionsList={armorList} />
                    <CharacterCreationDropdown title='Оружие' setProperty={setWeapon} optionsList={weaponsList} />
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