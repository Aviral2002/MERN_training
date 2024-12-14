import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/crudDatabase/users", {
                name: username,  // Using "name" instead of "username" to match your schema
                email,
                password,
            });
            console.log("User Registered", response.data);
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log("Something went wrong", error); // Include error for better debugging
        }
    }

    return (
        <div style={{ background: 'black', height: '200px', width: '100vw', textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>  {/* Corrected from <htmlForm> to <form> */}
                <h2>Registration</h2>
                <div className="form-group">
                    <label htmlFor="fname">Name:</label>
                    <input 
                        type="text" 
                        id="fname" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pin">Password:</label>
                    <input 
                        type="password" 
                        id="pin" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>  
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
