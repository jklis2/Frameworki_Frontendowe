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
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import {Button} from "../styleHelpers/Button";
import {UserMenu} from "../Component/tsx/Dashboard/UserMenu"
import { UserAlbums } from "../Component/tsx/Dashboard/UserAlbums";


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
  const [street, setStreet] = useState("")
  const [suite, setSuite] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [catchPhrase, setCatchPhrase] = useState("")
  const [bs, setBs] = useState("")

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
  
  const handleValueFromEdit = (e: any) => {
    console.log(typeof(e));
    if (currentUser) {
      if (name) currentUser.name = name;
      if (userName) currentUser.username = userName;
      if (email) currentUser.email = email;
      if (phoneNumber) currentUser.phone = phoneNumber;
      if (street) currentUser.address.street = street;
      if (suite) currentUser.address.suite = suite;
      if (city) currentUser.address.city = city;
      if (zipcode) currentUser.address.zipcode = zipcode;
      if (companyName) currentUser.company.name = companyName;
      if (catchPhrase) currentUser.company.catchPhrase = catchPhrase;
      if (bs) currentUser.company.bs = bs;
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
          <div className="dashboard-top-menu">
          <UserMenu currentUser={currentUser} handleClickOpen={handleClickOpen}></UserMenu>

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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Username"
                defaultValue={currentUser?.username}
                placeholder="User Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Email"
                defaultValue={currentUser?.email}
                placeholder="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Phone"
                defaultValue={currentUser?.phone}
                placeholder="Phone Number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Street"
                defaultValue={currentUser?.address.street}
                placeholder="Street"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Suite"
                defaultValue={currentUser?.address.suite}
                placeholder="Suite"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSuite(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="City"
                defaultValue={currentUser?.address.city}
                placeholder="City"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="ZipCode"
                defaultValue={currentUser?.address.zipcode}
                placeholder="ZipCode"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipcode(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Company name"
                defaultValue={currentUser?.company.name}
                placeholder="Company name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="Catch phrase"
                defaultValue={currentUser?.company.catchPhrase}
                placeholder="Catch phrase"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCatchPhrase(e.target.value)}
                className="mt-3"
              />
              <TextField
                type="text"
                label="BS"
                defaultValue={currentUser?.company.bs}
                placeholder="BS"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBs(e.target.value)}
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
          </div>
          <h2> Albums with photos:</h2>
            <UserAlbums photo={photo} value={value} ownAlbums={ownAlbums} handleChange={handleChange}/>
        </div>  
      </div>
    </>
  );
};
export default Dashboard;