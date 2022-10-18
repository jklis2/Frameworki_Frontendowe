import React, { FC, useEffect, useState } from "react";
import User from "./Entities/Users";
import Header from "./Component/tsx/Header";

const SearchUser : FC = () => {

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
            <Header></Header>
            <div>
            123
            {data.map((user) => {
                return (
                    <div key={user.id}> {user.name} {user.username} </div>
                 )
            })} 
        </div>
        </div>
    )
}

export default SearchUser