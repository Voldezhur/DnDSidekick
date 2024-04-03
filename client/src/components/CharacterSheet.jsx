import React from "react";

function CharacterName (props) {
    return (
        <div class="character-name">
            <div>{props.content}</div>
            <div id="info">{props.title}</div>
        </div>
    );
}

export default function CharacterSheet () {
    return (
        <div id="character-sheet">
            <span id="character-sheet-title">Лист Персонажа</span>
            <CharacterName content="Моргрим" title="Имя персонажа" />
        </div>
    );
}