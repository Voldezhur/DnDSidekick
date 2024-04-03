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

export default function CharacterSheet () {
    return (
        <div id="character-sheet">
            <div id="character-sheet-title">Лист Персонажа</div>

            <div id="character-meta">
                <CharacterName content="Моргрим" title="Имя персонажа" />

                <div id="character-about">
                    <div id="character-about-row">
                        <CharacterInfo content="Плут" value="1" title="Класс и уровень" />
                        <CharacterInfo content="Бездомный" title="Предыстория" />
                        <CharacterInfo content="Имя" title="Имя игрока" />
                    </div>
                    <div id="character-about-row">
                        <CharacterInfo content="Полурослик" title="Раса" />
                        <CharacterInfo content="Chaotic Neutral" title="Мировоззрение" />
                        <CharacterInfo content="100 оч." title="Опыт" />
                    </div>
                </div>
            </div>

            
        </div>
    );
}