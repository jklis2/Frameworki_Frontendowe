import React, {FC} from "react";
import Header from "./Component/tsx/Header";
import "./Component/css/Home.css"

const Home: FC = () => {


    
    return(
        <div>
            <Header/>
            <div className="welcome-container"> 
                <div className="welcome-content">
                    <div className="welcome-photo">
                       <img src={`${process.env.PUBLIC_URL}/img/Welcome_photo.jpg`} alt="Welcome photo"/>
                    </div>
                    <div className="welcome-text">
                        <div> <h2>Welcome on our Page!</h2> </div>
                        <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eos iusto asperiores magni, nemo tempora dolore reprehenderit vitae dolores vel,
                             non harum in expedita earum sit fugiat provident! Blanditiis, ducimus iste.
                        </div>
                        <div className="welcome-button">
                            <a href="/Register">Join to us!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home