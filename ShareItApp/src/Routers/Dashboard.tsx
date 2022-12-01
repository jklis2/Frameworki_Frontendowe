import React, { FC, useState } from "react";
import "../Component/css/Dashboard.css";
import Header from "../Component/tsx/Header";
import { IState } from "../Redux/Reducers";
import { IUsersReducer } from "../Redux/Reducers/usersReducer";
import { getUsers } from "../Redux/actions/userActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../Entities/Posts";
import { Album } from "../Entities/Albums";
import Photo from "../Entities/Photo";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import {Button} from "../styleHelpers/Button";
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';

type GetUsers = ReturnType<typeof getUsers>;
const Dashboard: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, [dispatch]);

  const { currentUser } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }));

  const [posts, setPosts] = useState<Array<Post>>([]);
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [photo, setPhoto] = useState<Array<Photo>>([]);
  const [value, setValue] = React.useState("1");

  //State for form values
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //Dialog menu
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
  // Dialog menu end

  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState(" ");
  // const [phoneNumber, setPhoneNumber] = useState("")

  //Values from form
  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log(name);
  };

  const userNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const phoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
    console.log(phoneNumber);
  };

  const handleValueFromEdit = (e: any) => {
    if (currentUser) {
      if (name) currentUser.name = name;
      if (userName) currentUser.username = userName;
      if (email) currentUser.email = email;
      if (phoneNumber) currentUser.phone = phoneNumber;
    }

    handleClose();
    //Make alert after change.
    // <Alert severity="success">Successfully edited!</Alert>
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const fetchPosts = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await request.json();
    setPosts(response);
  };

  const fetchAlbums = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/albums");
    const response = await request.json();
    setAlbums(response);
  };

  const fetchPhotos = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/photos");
    const response = await request.json();
    setPhoto(response);
  };

  useEffect(() => {
    fetchPosts();
    fetchAlbums();
    fetchPhotos();
  }, []);

  const ownPosts = posts.filter((obj: Post) => {
    return obj.userId === Number(currentUser?.id ?? 1);
  });
  const ownAlbums = albums.filter((obj: Album) => {
    return obj.userId === Number(currentUser?.id ?? 1);
  });

  return (
    <>
      <div className="dashboard-container">
        <Header />
        <div className="container">
          <div className="dashboard-left-menu ">
            <div className="dashboard-left-menu-1">
              <div className="dashboard-left-menu-img">
                <img
                  src={`${process.env.PUBLIC_URL}/img/Avatar.png`}
                  alt="Avatar"
                />
              </div>
              <div className="dashboard-left-menu-user-info">
                <h3>User info:</h3>
                <div className="user-data">{currentUser?.name}</div>
                <div className="user-data">{currentUser?.username}</div>
                <div className="user-data">{currentUser?.email}</div>
                <div className="user-data">{currentUser?.phone}</div>
              </div>
            </div>
            <div className="dashboard-left-menu-2">
              <div className="dashboard-left-menu-user-address">
                <h3>User address:</h3>
                <div className="user-data">{currentUser?.address.street}</div>
                <div className="user-data">{currentUser?.address.suite}</div>
                <div className="user-data">{currentUser?.address.city}</div>
                <div className="user-data">{currentUser?.address.zipcode}</div>
              </div>
              <div className="dashboard-left-menu-user-company">
                <h3>User Company:</h3>
                <div className="user-data">{currentUser?.company.website}</div>
                <div className="user-data">{currentUser?.company.name}</div>
                <div className="user-data">
                  {currentUser?.company.catchPhrase}
                </div>
                <div className="user-data">{currentUser?.company.bs}</div>
              </div>
            </div>
            <div className="dashboard-left-menu-button">
              <Button
                className="dashboard-left-menu-button-a"
                onClick={handleClickOpen}
              >
                Edit profile
              </Button>
            </div>
          </div>

          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
          >
            <DialogContent className="d-flex flex-column">
              <DialogContentText>Edit user</DialogContentText>
              <TextField
                type="text"
                label="Name and Surname"
                defaultValue={currentUser?.name}
                placeholder="Name"
                onChange={nameChange}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Username"
                defaultValue={currentUser?.username}
                placeholder="User Name"
                onChange={userNameChange}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Email"
                defaultValue={currentUser?.email}
                placeholder="Email"
                onChange={emailChange}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Phone"
                defaultValue={currentUser?.phone}
                placeholder="Phone Number"
                onChange={phoneNumberChange}
                className="mt-3"
              />
              <Button onClick={handleValueFromEdit}>OK</Button>
            </DialogContent>
          </Dialog>

          <div className="posts">
            {ownPosts?.map((post) => {
              return (
                <div className="single-post">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              );
            })}
          </div>
          <h2> Albums with photos:</h2>
          <div className="test-tabs">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    TabIndicatorProps={{
                      style: { backgroundColor: "white", color: "red" },
                    }}
                    textColor="inherit"
                    variant="scrollable"
                    onChange={handleChange}
                    aria-label="Photo gallery"
                  >
                    {ownAlbums?.map((album) => {
                      return <Tab label={album.title} value={album.id} />;
                    })}
                  </TabList>
                </Box>
                <div className="photos d-flex justify-content-center flex-wrap">
                  {photo
                    ?.filter((photo) => {
                      return photo.albumId === Number(value);
                    })
                    .map((ph: Photo) => {
                      return (
                        <div className="photoItem">
                          <img
                            src={ph.thumbnailUrl}
                            alt={ph.id.toString()}
                          ></img>
                        </div>
                      );
                    })}
                </div>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
