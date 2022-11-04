import React, { FC } from "react";
import Photo from "../../Entities/Photo";
import '../css/PhotoList.css'

const PhotoList = (props: any) => {

    return(
        <div className="photos__container">
            {props.items.map((photo: Photo) => {
                return(
                    <div>
                        <img src={photo.thumbnailUrl} alt="123"></img>
                    </div>
                )

            })}

            
        </div>
    )
}

export default PhotoList