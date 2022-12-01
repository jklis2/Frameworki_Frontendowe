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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";


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


  //Handlers for adding post

  const [postTitle, setPostTile] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPostTile(e.target.value)
  }
  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostContent(e.target.value)
  }

  const addNewPost = () => {
    const newPost : Post = {
      id: posts.length + 1,
      userId: currentUser?.id || 1,
      title: postTitle,
      body: postContent 
  }
  posts.push(newPost)
  }
  // State for dialog menu
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullWidth(event.target.checked);
  };
  //End menu

  return (
    <div className="d-flex flex-column">
      <Header></Header>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent className="d-flex flex-column">
          <DialogContentText>Add post</DialogContentText>
          <TextField
            type="text"
            label="Post title"
            size="small"
            className="mt-3"
            onChange={handleTitle}
          ></TextField>
          <TextField
            type="text"
            label="Comment content"
            multiline
            className="mt-3"
            maxRows={Infinity}
            onChange={handleContent}
            
          ></TextField>
          <Button onClick={addNewPost} >OK</Button>
        </DialogContent>
      </Dialog>

      <div className="d-flex flex-column align-items-center">
        <button onClick={handleClickOpen}>Add post</button>
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
