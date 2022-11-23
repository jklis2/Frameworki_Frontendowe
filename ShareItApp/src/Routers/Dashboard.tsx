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
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

type GetUsers = ReturnType<typeof getUsers>;
const Dashboard: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
  }, [dispatch]);

  const { users } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }));

  const[posts, setPosts] = useState<Array<Post>>([])
  const[albums, setAlbums] = useState<Array<Album>>([])
  const[photo, setPhoto] = useState<Array<Photo>>([]);
  const [value, setValue] = React.useState('1');

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
  },[])

  const ownPosts = posts.filter((obj: Post) => {
    return obj.userId === Number(users[0].id ?? 1)
  })
  const ownAlbums = albums.filter((obj: Album) => {
    return obj.userId === Number(users[0].id ?? 1)
  })

  return (
    <>
      <div className="dashboard-container">
        <Header />
        <div className="container">
          <div className="dashboard-left-menu ">
            {users?.map((user) => {
              return (
                <div className="!!!   TOMEK GIVE ME NAME   !!!">
                  <div className="dashboard-left-menu-1">
                    <div className="dashboard-left-menu-img">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Avatar.png`}
                        alt="Avatar"
                      />
                    </div>
                    <div className="dashboard-left-menu-user-info">
                      <h3>User info:</h3>
                      <div className="user-data">{user.name}</div>
                      <div className="user-data">{user.username}</div>
                      <div className="user-data">{user.email}</div>
                      <div className="user-data">{user.phone}</div>
                    </div>
                  </div>
                  <div className="dashboard-left-menu-2">
                    <div className="dashboard-left-menu-user-address">
                      <h3>User address:</h3>
                      <div className="user-data">{user.address.street}</div>
                      <div className="user-data">{user.address.suite}</div>
                      <div className="user-data">{user.address.city}</div>
                      <div className="user-data">{user.address.zipcode}</div>
                    </div>
                    <div className="dashboard-left-menu-user-company">
                      <h3>User Company:</h3>
                      <div className="user-data">{user.company.website}</div>
                      <div className="user-data">{user.company.name}</div>
                      <div className="user-data">
                        {user.company.catchPhrase}
                      </div>
                      <div className="user-data">{user.company.bs}</div>
                    </div>
                  </div>
                  <div className="dashboard-left-menu-button">
                    <a
                      className="dashboard-left-menu-button-a"
                      href="/EditProfile"
                    >
                      <button>Edit profile</button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div> 
            
          <div className="posts"> 

          {ownPosts?.map((post) => {
              return (
               <div className="single-post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
               </div>
              )
          })}
          </div>

          {/* Delete in the future */}
          <div className="test-tabs">
          <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {ownAlbums?.map((album) => {
              return (
                <Tab label={album.title} value={album.id} />
              )
            })
          }
          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
        <div className="photos d-flex flex-wrap">
        {photo?.filter((photo) => {
          return photo.albumId === Number(value)
        }).map((ph: Photo) => {
          return(
          <div className="photoItem"><img src={ph.thumbnailUrl} alt={(ph.id).toString()}></img></div>
        )})}
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
