import React, { useState, useEffect, useReducer } from "react";
import { Link } from 'react-router-dom';

export const Home = () => {

    const [authorized, setAuthorized] = useState(false)
    const [pwType, setPwType] = useState('password')
    const [password, setPassword] = useState([{ userID: "Johnvck", password: "1212312121" }])
    const [input, setInput] = useState([{ userID: " ", password: " " }])
    // const [inputPassword, setinputPassword] = useState('')
    // const [inputID, setInputID] = useState('')
    const [inputPassword, setinputPassword] = useState([{ userID: " ", password: " " }])



    const idHandler = (e) => {

        // setInput({ ...})

    }
    const passwordHandler = (e) => {
        const inputPassword = e.target.value
    }

    const see = () => {
        pwType === 'password' ? setPwType('text') : setPwType('password')

    }

    const authorize = () => {
        // (id && password) ===
    }
    return (
        <>
            {authorized ? <h1>YOU ARE AUTHORIZED</h1>
                : <h1>"Error"</h1>}
            <input type="text" placeholder="User ID" onChange={idHandler} />
            <input type={pwType} placeholder="Password" onChange={passwordHandler} />
            <button type="onSubmit" onClick={see}>See</button>
            <button type="onSubmit" onSubmit={authorize}>Log In</button>
        </>);
}

export default Home;


//log in to set the state to authorized