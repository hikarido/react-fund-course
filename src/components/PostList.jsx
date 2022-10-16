import React from "react"
import PostItem
 from "./PostItem";
// можно так
// const PostList = (props) => {
// ...
// props.posts
// но мы сделали с деструктивизацией(распоковкой)
// const PostList = ({posts}) => {

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {posts.map(post =>
                <div key={post.id}>
                    <PostItem post={post} />
                </div>
            )}
        </div>
    );
};

export default PostList
