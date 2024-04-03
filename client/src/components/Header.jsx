import React from "react";

function ProfileIcon (props) {
    return (
        <img src="../icons/profile.svg" alt="" />
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