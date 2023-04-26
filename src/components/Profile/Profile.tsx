import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export function Profile() {
    return (
        <div>
            <div className={s.profile}>
                <img src="https://img1.goodfon.ru/original/1920x1080/8/87/abstrakciya-color-abstract-128.jpg"
                     alt="pic"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}