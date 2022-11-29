import React, { FC, useState } from "react";
import Header from "../Component/tsx/Header";
import { Post } from "../Entities/Posts";
import { useEffect } from "react";
import { Comment } from "../Entities/Comments";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../Redux/Reducers";
import { IUsersReducer } from "../Redux/Reducers/usersReducer";
import { getUsers } from "../Redux/actions/userActions";
import { User } from "../Entities/Users";

type GetUsers = ReturnType<typeof getUsers>;
const Posts: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, [dispatch]);

  const { users, currentUser } = useSelector<IState, IUsersReducer>(
    (state) => ({
      ...state.users,
    })
  );

  const [posts, setPosts] = useState<Array<Post>>([]);
  const [comments, setComments] = useState<Array<Comment>>([]);

  const fetchPosts = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await request.json();
    setPosts(response);
  };

  const fetchComments = async () => {
    const request = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
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
      <div className="d-flex flex-column align-items-center">
        {posts.map((post) => {
          return (
            <div className="w-75">
              <h2>
                {" "}
                {post.title} ~{" "}
                {users
                  .filter((user) => {
                    return user.id === post.userId;
                  })
                  .map((user: User) => {
                    return <span>{user.name}</span>;
                  })}
              </h2>
              <p>{post.body}</p>

              <Accordion className="bg-transparent">
                <Accordion.Item eventKey="0" className="bg-transparent">
                  <Accordion.Header>Comments</Accordion.Header>
                  <br />
                  {comments
                    .filter((comment) => {
                      return comment.postId === post.id;
                    })
                    .map((cm: Comment) => {
                      return (
                        <Accordion.Body>
                          <h3>
                            {cm.name} ~ {cm.email}
                          </h3>
                          {cm.body}
                        </Accordion.Body>
                      );
                    })}
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
