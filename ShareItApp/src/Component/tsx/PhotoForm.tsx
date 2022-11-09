import React, {FC} from "react";
import "../css/PhotoForm.css"

interface Props{
    photoId: number;
    setPhoto(photoId: number) : void
}

const PhotoForm: FC<Props> = (props: any) => {

    const handleChange = (event: any) => {
        event.preventDefault();
        console.log(event.target.value)
        props.setPhoto(event.target.value)
    }
    
    return(
        <div className="photoForm-container">
            <form>
                <input className="input-search"
                type="text"
                placeholder="Type id of photo"
                onChange = {handleChange}
                >
                </input>
            </form>
        </div>
    )
}

export default PhotoForm