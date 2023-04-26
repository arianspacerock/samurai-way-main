import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">
                        Artem
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">
                        Artem
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">
                        Artem
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">
                        Artem
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">
                        Artem
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    hey
                </div>
                <div className={s.message}>
                    lalaley
                </div>
            </div>
        </div>
    );
};

