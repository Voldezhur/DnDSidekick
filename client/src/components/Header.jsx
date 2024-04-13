import React from "react";

function ProfileIcon () {
    return (
        <img src="../icons/profile.svg" alt="Профиль" />
    );
}

export default function Header () {
    return (
        <header>
            <div class="header-flex">
                <span>D&D Sidekick</span>
                <span>Информация</span>
                <span>Информация</span>
                <ProfileIcon />
            </div>
        </header>
    );
}