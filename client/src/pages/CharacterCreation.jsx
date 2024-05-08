// Импорт функционала
import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Импорт компонентов
import Header from "../components/Header";
import CharacterCreationInput from "../components/CharacterCreation/CharacterCreationInput";
import CharacterCreationDropdown from "../components/CharacterCreation/CharacterCreationDropdown";
import CharacterCreationAbilities from "../components/CharacterCreation/CharacterCreationAbilities";

// Импорт контекста
import { UserContext } from "../App";  // Контекст авторизованного пользователя

const CharacterCreation = () => {
    const {user, setUser} = useContext(UserContext);  // Подгружаем контекст авторизованного пользователя
    
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

    // Пустой лист персонажа для записи данных
    const emptyCharacterSheet = {
        name: 'new_character',
        background: 'placeholder_background',
        race: racesList[0],
        class: classesList[0],
        abilityScores: {
            strength: {score: 10, modifier: 0},
            dexterity: {score: 10, modifier: 0},
            constitution: {score: 10, modifier: 0},
            intelligence: {score: 10, modifier: 0},
            wisdom: {score: 10, modifier: 0},
            charisma: {score: 10, modifier: 0}
        },
        equipment: {
            armor: armorList[0],
            weapon: weaponsList[0]
        }
    }
    
    // Состояние, которое определяет создаваемый лист персонажа
    const [characterSheet, setCharacterSheet] = useState(emptyCharacterSheet);

    // Для перехода на главную после созданиия персонажа
    const navigate = useNavigate();

    // Функция для обновления листа персонажа новыми данными
    const setProperty = (property, value) => {
        const newCharacterSheet = characterSheet;
        newCharacterSheet[property] = value;
        setCharacterSheet(newCharacterSheet);
    }

    // Функция для выбора брони
    const setArmor = (property, value) => {
        const newCharacterSheet = characterSheet;
        newCharacterSheet.equipment[property] = armorList.filter(x => {return x.name === value})[0];
        setCharacterSheet(newCharacterSheet);
    }

    // Функция для выбора оружия
    const setWeapon = (property, value) => {
        const newCharacterSheet = characterSheet;
        newCharacterSheet.equipment[property] = weaponsList.filter(x => {return x.name === value})[0];
        setCharacterSheet(newCharacterSheet);
    }

    const setAbility = (ability, value) => {
        const newCharacterSheet = characterSheet;
        newCharacterSheet.abilityScores[ability].score = value;
        newCharacterSheet.abilityScores[ability].modifier =  (value - 10) % 2;
        setCharacterSheet(newCharacterSheet);
    }

    // Функция для сохранения персонажа в базу данных
    const saveCharacter = () => {
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

            {/*
                Первый шаг создания персонажа:
                . Имя
                . Краткая предыстория
            */}
        
            <p className="section-title">Шаг 1. Имя и предыстория</p>

            <div className="step-flex">
                <div className="inputs-flex">
                    <CharacterCreationInput title='Имя' property='name' setProperty={setProperty} />
                    <CharacterCreationInput title='Предыстория' property='background' setProperty={setProperty} />
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
                    <CharacterCreationDropdown title='Раса' property='race' setProperty={setProperty} optionsList={racesList} />
                    <CharacterCreationDropdown title='Класс' property='class' setProperty={setProperty} optionsList={classesList} />
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
                    <CharacterCreationAbilities title='Доспех' property='armor' setProperty={setArmor} optionsList={armorList} />
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
                    <CharacterCreationDropdown title='Доспех' property='armor' setProperty={setArmor} optionsList={armorList} />
                    <CharacterCreationDropdown title='Оружие' property='weapon' setProperty={setWeapon} optionsList={weaponsList} />
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