import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const emptyPost = {id: -1, title: '', body: ''}
    const [post, setPost] = useState(emptyPost)

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost  = {
          id: Date.now(),
          title: post.title,
          body: post.body
        }
        create(newPost)
        setPost(emptyPost)
    
      }

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                onChange={e => setPost({ ...post, title: e.target.value })}
                placeholder="Название поста" />
            <MyInput
                value={post.body}
                type="text"
                onChange={e => setPost({ ...post, body: e.target.value })}
                placeholder="Описание поста" />

            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};


export default PostForm; 