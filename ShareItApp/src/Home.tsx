import React, {FC ,useEffect } from "react";
import { useState } from "react";
import User from "./Entities/Users";
import Header from "./Component/tsx/Header";
import "./Component/css/Home.css"

const Home: FC = () => {

    const [data, setData] = useState<Array<User>>([])
    
    const fetchData = async () => {
        const request = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await request.json()
        setData(response)
    }
   
useEffect(() => {
    fetchData()
}, [])   
    
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

            

    {/* Data from api */}
    {/* 
        {data.map((items) => {
            return (
                <div key={items.id}> {items.username}</div>
            )
        })} */}
            </div>
        </div>

    )
}

export default Home