import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts(props: any) {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message="It's my first post" likesCount="20" />
            </div>
        </div>
    )
}