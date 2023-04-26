import React from "react";
import s from './Post.module.css'

export function Post(props: any) {
    return (
        <div className={s.item}>
            <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.starhit.ru%2Fnovosti%2Fpoyavilis-pervyie-kadryi-filma-avatar-2-198265%2F&psig=AOvVaw3pQno6wS1t0nOL9NHCDLHg&ust=1681443275288000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIj7rbr2pf4CFQAAAAAdAAAAABAF"
                alt="picture"/>
            {props.message}
            <div>
                <span>Likes</span>
                {props.likesCount}
            </div>
        </div>
    )
}