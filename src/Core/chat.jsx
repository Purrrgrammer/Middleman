import { Link } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from "react";

export const Chat = () => {

    const Waiting = () => {

        return <h1>...</h1>
    }
    //chat storage
    const [chatStorgeA, setChatStorageA] = useState([])
    const [chatStorgeM, setChatStorageM] = useState([])
    const [chatStorgeB, setChatStorageB] = useState([])
    //chat chat input
    const [chatA, setchatA] = useState('')
    const [inputTextA, setInputTextA] = useState('')
    const [inputTextM, setInputTextM] = useState('')
    const [inputTextB, setInputTextB] = useState('')
    //chat chat stage
    const [chatState, setChatState] = useState('')

    const onChangeHandlerA = (e) => {
        setInputTextA(e.target.value)
    }
    const onChangeHandlerM = (e) => {
        setInputTextM(e.target.value)
    }
    const onChangeHandlerB = (e) => {
        setInputTextB(e.target.value)
    }
    const sendMessageHandlerA = (e) => {
        setChatStorageA([...chatStorgeA, inputTextA]);
    }
    const sendMessageHandlerM = (e) => {
        setChatStorageM([...chatStorgeM, inputTextM]);
    }
    const sendMessageHandlerB = (e) => {
        setChatStorageB([...chatStorgeB, inputTextB]);
    }
    return (
        <>
            <h1>Chat Space</h1>
            <div className='chat-space'>
                <div className='chatA'>
                    {chatStorgeA.map((el) => {
                        return <>
                            {/* {inputText && <Waiting />} */}
                            <h2>{el}</h2 >
                        </>
                    })}
                </div>
                <div className='chatM'>
                    {chatStorgeM.map((el) => {
                        return <>
                            {/* {inputText && <Waiting />} */}
                            <h2>{el}</h2 >
                        </>
                    })}
                </div>
                <div className='chatB'>
                    {chatStorgeB.map((el) => {
                        return <>
                            {/* {inputText && <Waiting />} */}
                            <h2>{el}</h2 >
                        </>
                    })}
                </div>
            </div >
            <div className='messaging-space'>
                <div className='chat-container'>
                    <input type="text" onChange={onChangeHandlerA} />
                    <button onClick={sendMessageHandlerA}>Send</button>
                </div>
                <div className='chat-container'>
                    <input type="text" onChange={onChangeHandlerM} />
                    <button onClick={sendMessageHandlerM}>Send</button>
                </div>
                <div className='chat-container'>
                    <input type="text" onChange={onChangeHandlerB} />
                    <button onClick={sendMessageHandlerB}>Send</button>
                </div>
            </div>
        </>);
};

export default Chat;


