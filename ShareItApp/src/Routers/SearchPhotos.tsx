import React, { FC, useEffect, useState } from "react";
import Photo from "../Entities/Photo";
import Header from "../Component/tsx/Header";
import PhotoList from "../Component/tsx/PhotoList";
import PaginationMenu from "../Component/tsx/PaginationMenu";
import PhotoForm from "../Component/tsx/PhotoForm";


const SearchPhotos: FC = () => {
  const [data, setData] = useState<Array<Photo>>([]);

  const fetchData = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/photos");
    const response = await request.json();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [page, setPage] = useState(1);

  const noOfItems = data.length;
  const noOfPages = Math.ceil(noOfItems / 24);
  
  const indexOfLastPhoto = page * 24;
  const indexOfFirstPhoto = indexOfLastPhoto - 24;
  const currentPosts = data.slice(indexOfFirstPhoto, indexOfLastPhoto);

  return (
    <div>
      <Header></Header>
      <div>
          <PhotoForm/>
          <PhotoList items = {currentPosts} />
          <PaginationMenu page={page} pages={noOfPages} setPage = {setPage}/>
      </div>
    </div>
  );
};

export default SearchPhotos;
