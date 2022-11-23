import React, { FC, useEffect, useState } from "react";
import Photo from "../Entities/Photo";
import Header from "../Component/tsx/Header";
import PhotoList from "../Component/tsx/PhotoList";
import PaginationMenu from "../Component/tsx/PaginationMenu";
import PhotoForm from "../Component/tsx/PhotoForm";
import "../Component/css/Photo/SearchPhotos.css";

const SearchPhotos: FC = () => {
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
  const currentPosts = data.slice(indexOfFirstPhoto, indexOfLastPhoto);

  return (
    <div className="search__container">
      <Header></Header>
      <div>
        <PhotoForm photoId={photo} setPhoto={setPhoto} />
        <PhotoList items={currentPosts} selectedPhoto={photo} />
        <PaginationMenu page={page} pages={noOfPages} setPage={setPage} />
      </div>
    </div>
  );
};

export default SearchPhotos;
