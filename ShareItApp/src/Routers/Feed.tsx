import Header from "../Component/tsx/Header";
import PhotoList from "../Component/tsx/PhotoList";
import React, { FC, useEffect, useState } from "react";
import Photo from "../Entities/Photo";
import {Album} from "../Entities/Albums";
import PaginationMenu from "../Component/tsx/PaginationMenu";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";


const Feed: FC = () => {

  const [data, setData] = useState<Array<Photo>>([]);
  const [albums, setAlbums] = useState<Array<Album>>([]);
  const [singlePhoto, setsinglePhoto] = useState(0);
  const [value, setValue] = React.useState("1");
  const [photo, setPhoto] = useState<Array<Photo>>([]);

  const fetchData = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/photos");
    const response = await request.json();
    setData(response);
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
    fetchData();
    fetchAlbums();
    fetchPhotos();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [page, setPage] = useState(1);
  let noOfItems;
  let noOfPages = 1;
  let indexOfLastPhoto;
  let indexOfFirstPhoto;
  if (singlePhoto !== 0 && singlePhoto > 0) {
    noOfItems = photo;
    indexOfFirstPhoto = 0;
    indexOfLastPhoto = data.length;
  } else {
    noOfItems = data.length;
    noOfPages = Math.ceil(noOfItems / 24);
    indexOfLastPhoto = page * 24;
    indexOfFirstPhoto = indexOfLastPhoto - 24;
  }
  const currentPhostos = data.slice(indexOfFirstPhoto, indexOfLastPhoto);

  return (
  <div> 
    <Header></Header> 
    <h2>Photos : </h2>
    <PhotoList items={currentPhostos} selectedPhoto={singlePhoto}/>
    <PaginationMenu page={page} pages={noOfPages} setPage={setPage} />

    <h2>Albums :</h2>
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
              {albums.map((album) => {
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
                    <img src={ph.thumbnailUrl} alt={ph.id.toString()}></img>
                  </div>
                );
              })}
          </div>
        </TabContext>
      </Box>
    </div>
  </div>);
};

export default Feed;