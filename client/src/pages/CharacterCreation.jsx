import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import CharacterCreationInput from "../components/CharacterCreation/CharacterCreationInput";
import CharacterCreationDropdown from "../components/CharacterCreation/CharacterCreationDropdown";
import axios from 'axios';

const CharacterCreation = () => {
    // Пустой лист персонажа для записи данных
    const emptyCharacterSheet = {
        name: '',
        background: '',
        race: '',
        class: '',
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
                    <CharacterCreationDropdown title='Раса' property='race' setProperty={setProperty} />
                    <CharacterCreationDropdown title='Класс' property='class' setProperty={setProperty} />
                </div>
                <div className="step-info">
                    <p className="step-info-title">Как у каждой истории есть начало, так и у каждого персонажа есть имя и предыстория</p>
                    <p>. Имя - имя вашего персонажа</p>
                    <p>. Предыстория - то, чем ваш персонаж занимался до того, как отправился на приключения.</p>
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