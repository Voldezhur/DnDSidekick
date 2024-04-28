import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import CharacterCreationInput from "../components/CharacterCreation/CharacterCreationInput";
import CharacterCreationDropdown from "../components/CharacterCreation/CharacterCreationDropdown";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CharacterCreation = () => {
    // Списки возможных опций для созданиия персонажа
    const racesList = ["Человек", "Эльф", "Полуэльф", "Орк", "Полуорк", "Дварф", "Хафлинг", "Гном"];
    const classesList = ["Варвар", "Воин", "Следопыт", "Плут", "Бард", "Паладин", "Жрец", "Волшебник", "Чародей", "Друид"];

    // Пустой лист персонажа для записи данных
    const emptyCharacterSheet = {
        name: 'new_character',
        background: 'placeholder_background',
        race: racesList[0],
        class: classesList[0],
        abilityScores: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        }
    }
    
    // Состояние, которое определяет создаваемый лист персонажа
    const [characterSheet, setCharacterSheet] = useState(emptyCharacterSheet);

    // Для перехода на главную после созданиия персонажа
    const navigate = useNavigate();

    // Функция для обновления листа персонажа новыми данными
    const setProperty = (property, value) => {
        const newCharacterSheet = characterSheet;
        newCharacterSheet[property] =  value;
        setCharacterSheet(newCharacterSheet);
    }

    // Функция для сохранения персонажа в базу данных
    const saveCharacter = () => {
        axios.post('http://localhost:8000/character/newCharacter', {creator_id: 1, character_sheet: characterSheet})
        .then((response) => {
            console.log(response);
            navigate('/mainPage');
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

            {/* Сохранение персонажа */}

            <div className="save-button-flex">
                <button onClick={saveCharacter}>Сохранить персонажа</button>
            </div>
        </>
    );
}

export default CharacterCreation;