import React from "react";

function CharacterName (props) {
    return (
        <div class="character-name">
            <div>{props.content}</div>
            <div id="info">{props.title}</div>
        </div>
    );
}

function CharacterInfo (props) {
    return (
        <div class="character-info">
            <div id="content">
                <div>{props.content}</div>
                <div>{props.value}</div>
            </div>

            <div id="info">{props.title}</div>
        </div>
    );
}

function Attribute (props) {
    return (
        <div class="attribute">
            <div>{props.name}</div>
            <div id="attribute-modifier">{props.value - 10 > 0 ? '+' : ''}{Math.floor((props.value - 10) / 2)}</div>
            <div id="attribute-value">{props.value}</div>
        </div>
    );
}

export default function CharacterSheet () {
    return (
        <div id="character-sheet">
            <div id="character-sheet-title">Лист Персонажа</div>

            <div id="character-meta">
                <CharacterName content="Курамото Казунори" title="Имя персонажа" />

                <div id="character-about">
                    <div id="character-about-row">
                        <CharacterInfo content="Паладин" value="1" title="Класс и уровень" />
                        <CharacterInfo content="Бездомный" title="Предыстория" />
                        <CharacterInfo content="Владимир" title="Имя игрока" />
                    </div>
                    <div id="character-about-row">
                        <CharacterInfo content="Дворф" title="Раса" />
                        <CharacterInfo content="Lawful Good" title="Мировоззрение" />
                        <CharacterInfo content="100 оч." title="Опыт" />
                    </div>
                </div>
            </div>

            <div id="attributes">
                <Attribute name="Сила" value="14" />
                <Attribute name="Ловкость" value="12" />
                <Attribute name="Выносливость" value="14" />
                <Attribute name="Интеллект" value="9" />
                <Attribute name="Мудрость" value="12" />
                <Attribute name="Харизма" value="12" />
            </div>
        </div>
    );
}