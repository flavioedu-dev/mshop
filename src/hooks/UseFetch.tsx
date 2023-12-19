import { useState, useEffect } from "react";

export const UseFetch = () => {
    const path = "https://localhost:7047/api"

    const [data, setData] = useState([]);

    const getAllUsers = async () => {
        const res = await fetch(`${path}/User`).then(res => res.json())
        setData(res)
    }
    
    useEffect(() => {
        getAllUsers();
    }, [])

    console.log(data)
}
