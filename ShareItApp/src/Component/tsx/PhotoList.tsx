import React, { FC } from "react";
import Photo from "../../Entities/Photo";
import '../css/PhotoList.css'

interface Props{
    items: Photo[];
}

const PhotoList : FC<Props> = (props: any) => {

    return(
        <div className="photos__container">
           <div className="photos__items">
           {props.items.slice(0, 24).map((photo: Photo) => {
                return(
                    <div className="photos__img" key={photo.id}>
                        <img src={photo.thumbnailUrl} alt="123"></img>
                    </div>
                )

            })}
           </div>

            
        </div>
    )
}

export default PhotoList