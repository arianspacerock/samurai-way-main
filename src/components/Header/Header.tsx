import React from "react";
import s from './Header.module.css'
export function Header () {
    return (
        <header className={s.header}>
            <img src="https://www.iguides.ru/upload/medialibrary/5d9/5d9bc869d086d4ceee867b3afbb3a4c7.png"
                 alt="picture"
            />
        </header>
    )
}