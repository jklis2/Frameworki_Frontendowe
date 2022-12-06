import Header from "../Component/tsx/Header";
import PhotoList from "../Component/tsx/PhotoList";
import React, { FC, useEffect, useState } from "react";
import Photo from "../Entities/Photo";
import PaginationMenu from "../Component/tsx/PaginationMenu";

const Feed: FC = () => {

  const [data, setData] = useState<Array<Photo>>([]);
  const [photo, setPhoto] = useState(0);

  const fetchData = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/photos");
    const response = await request.json();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);


  //Change it for function later pls
  const [page, setPage] = useState(1);
  let noOfItems;
  let noOfPages = 1;
  let indexOfLastPhoto;
  let indexOfFirstPhoto;
  if (photo !== 0 && photo > 0) {
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
    <PhotoList items={currentPhostos} selectedPhoto={photo}/>
    <PaginationMenu page={page} pages={noOfPages} setPage={setPage} />

  
  </div>);
};

export default Feed;