import React, { FC, useState } from "react";
import Header from "../Component/tsx/Header";
import { Post } from "../Entities/Posts";
import { useEffect } from "react";
import { Comment } from "../Entities/Comments";

const Posts: FC = () => {
  
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [comments, setComments] = useState<Array<Comment>>([]);


  const fetchPosts = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await request.json();
    setPosts(response);
  };

  const fetchComments = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/comments");
    const response = await request.json();
    setComments(response);
  };

  useEffect(() => {
    fetchPosts();
    fetchComments();
  }, []);

  return (
    <div className="d-flex flex-column">
      <Header></Header>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>

              <>{console.log(comments)}</>
              <h3>Comments:</h3>
              <br/>
              {comments.filter((comment) => {
                return comment.postId === post.id
              }).map((cm: Comment) => {
                return(<div>
                  <h4>{cm.name}</h4>
                  <p>{cm.body}</p>
                </div>)
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
