import React, {FC} from "react";
import "../css/PhotoForm.css"

const PhotoForm: FC = () => {
    return(
        <div className="photoForm-container">
            <form>
                <input className="input-search"
                type="text"
                placeholder="Type id of photo">
                </input>
            </form>
        </div>
    )
}

export default PhotoForm