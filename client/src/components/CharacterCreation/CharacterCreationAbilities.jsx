// Импорт функционала
import { React, useState } from "react";

const Ability = ({ name, setAbility}) => {
    return (
        <div className="attribute-selection">
            <p>{name}:</p>
            <input onChange={(e) => {
                const modifier = Math.floor((e.target.value - 10) / 2);
                setAbility({score: e.target.value, modifier: modifier})
            }}></input>
        </div>
    );
}

const CharacterCreationAbilities = (props) => {
    // Состояние, в котором хранятся значения на выбор для атрибутов
    const [abilityDice, setAbilityDice] = useState([0, 0, 0, 0, 0, 0]);

    // Функция бросания кубика
    const throwDice = (dice) => {
        return Math.floor(Math.random() * dice + 1);
    }

    const randomizeAbilities = () => {
        let newAbilityDice = [];
        
        // 6 раз кидаем по 4 d6
        [...Array(6)].forEach(() => {
            let abilityNumbers = [];
            
            [...Array(4)].forEach(() => {
                abilityNumbers.push(throwDice(6));
            });

            abilityNumbers.sort().reverse();

            // Берем 3 лучших значения
            let abilityResult = 0;
            abilityNumbers.slice(0, 3).forEach(element => {
                abilityResult += element;
            });
            newAbilityDice.push(abilityResult);
        });

        setAbilityDice(newAbilityDice);
    }

    return (
        <div className="attribute-main-flex">
            <div className="dice-block">
                <div className="dice-for-abilities">
                    {abilityDice.map((item, i) => {
                        return (
                            <div key={i} className="ability-die">{item}</div>
                        );
                    })}
                </div>
                <button onClick={randomizeAbilities}>Бросить</button>
            </div>
            <div className="attribute-selection-flex">
                <Ability name="Сила" setAbility={props.setStrength} />
                <Ability name="Ловкость" setAbility={props.setDexterity} />
                <Ability name="Телосложение" setAbility={props.setConstitution} />
                <Ability name="Интеллект" setAbility={props.setIntelligence} />
                <Ability name="Мудрость" setAbility={props.setWisdom} />
                <Ability name="Харизма" setAbility={props.setCharisma} />
            </div>
        </div>
    );
}

export default CharacterCreationAbilities;