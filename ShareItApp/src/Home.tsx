import React, { useEffect } from "react";
import { useState } from "react";
import User from "./Entities/Users";

const WelcomePage = () => {

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
        {data.map((items) => {
            return (
                <div key={items.id}> {items.username}</div>
            )
        })}
    </div>

    )
}

export default WelcomePage