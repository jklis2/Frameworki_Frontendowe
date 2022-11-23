import React, { FC } from "react";
import Photo from "../../Entities/Photo";
import "../css/Photo/PhotoList.css";

interface Props {
  items: Photo[];
  selectedPhoto: number;
}
const PhotoList: FC<Props> = (props: any) => {
  const photoFilter = props.items.filter((obj: Photo) => {
    return obj.id === Number(props.selectedPhoto);
  });

  return (
    <div className="photos__container">
      <div className="photos__items">
        {props.selectedPhoto === "" || props.selectedPhoto === 0
          ? props.items.slice(0, 24).map((photo: Photo) => {
              return (
                <div className="photos__img" key={photo.id}>
                  <img src={photo.thumbnailUrl} alt="123"></img>
                </div>
              );
            })
          : photoFilter.slice(0, 24).map((photo: Photo) => {
              return (
                <div className="photos__img" key={photo.id}>
                  <img src={photo.thumbnailUrl} alt="123"></img>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default PhotoList;
