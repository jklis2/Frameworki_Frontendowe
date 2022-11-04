import React, { FC, useEffect, useState } from "react";
import Photo from "../Entities/Photo";
import Header from "../Component/tsx/Header";
import PhotoList from "../Component/tsx/PhotoList";


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

  return (
    <div>
      <Header></Header>
      <div>
          <PhotoList items = {data} />
      </div>
    </div>
  );
};

export default SearchPhotos;
