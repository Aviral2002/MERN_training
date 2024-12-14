import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Userlist = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
        try{
            const response = await axios.get('http://localhost:5000/crudDatabase/users')
            setUsers(response.data)

        }catch(error) {
            console.log(error)
        }
    };
    fetchUsers()
    },[])
    return (
        <div style={{background:'grey', height:'100vh', width:'100vw', textAlign:'center' }}>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Userlist