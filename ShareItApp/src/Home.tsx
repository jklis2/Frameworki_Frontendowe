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
    <div className="testtest"> 
        <Header/>

        {data.map((items) => {
            return (
                <div key={items.id}> {items.username}</div>
            )
        })}
    </div>

    )
}

export default Home