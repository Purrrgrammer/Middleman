import { Link } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from "react";

export const Bid = () => {
    const [time, setTime] = useState(new Date().getTime())
    const [timeOut, setTimeOut] = useState(new Date('3 jul 2023').getTime())
    const [defaultPic, setdefaultPic] = useState('https://www.mrporter.com/variants/images/38063312421049678/in/w560_q60.jpg')
    const [highestPrice, setHighestPrice] = useState(0)
    const [inputPrice, setInputPrice] = useState(0)


    //handler
    const onChangeHandler = (e) => {
        setInputPrice(e.target.value)
    }

    const onClickHandler = () => {
        highestPrice < inputPrice ? setHighestPrice(inputPrice) : alert('please enter the bigger price')

    }

    const getTime = () => {
        const timeRemaining = (timeOut - time) / 1000
        let days = Math.floor(timeRemaining / (60 * 60 * 24))
        let hours = Math.floor(
            (timeRemaining % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
        )
        //let minutes => CHECKED
        let minutes = Math.floor(timeRemaining / (60))
        //let seconds => CHECKED
        let seconds = Math.floor(timeRemaining)
        console.log("this is a time format", days, " ", hours, " ", minutes, " ", seconds, " ",)

        return [days, hours, minutes, seconds]

    }

    useEffect(() => {
        setInterval(() => {
            getTime();
        }
            , 1000)
    }, [])

    return (
        <div>
            <div className='bid-item'>
                <h1>Item Name</h1>
                <img src={defaultPic} alt="" style={{ height: '300px' }} />
                <h1>{highestPrice}</h1>
                <input type="number" onChange={onChangeHandler} />
                <button onClick={onClickHandler}>Place Bid</button>
            </div>
            {/* <h1>{days}</h1>
            <h1>{hours}</h1>
            <h1>{minutes}</h1>
            <h1>{seconds}</h1> */}
        </div>);
}

export default Bid;
