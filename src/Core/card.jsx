
import React, { useState, useEffect, useReducer } from "react";

function Card({ el, onChangeHandler, onClickHandler }) {
    const [timeOut, setTimeOut] = useState(new Date().getTime());
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const getTime = (timeOut) => {
        const now = new Date().getTime();
        let difference = (timeOut - now) / 1000 //in second
        let days = Math.floor(difference / (60 * 60 * 24))
        let hours = Math.floor(
            (difference / (60 * 60)) % 24
        )
        let minutes = Math.floor((difference / 60) % 60)
        let seconds = Math.floor(difference % 60)
        return { days, hours, minutes, seconds }
    }


    //Useeffect
    useEffect(() => {
        const intervalTask = setInterval(() => {
            const data = getTime(timeOut)
            setTimeRemaining({ ...data })
        }, 1000)
        return () => clearInterval(intervalTask);
    }, [timeOut])


    useEffect(() => {
        setTimeOut(new Date(el.exp).getTime())
    }, [el.exp])

    return (
        <div key={el.id} className='container'>
            <h1>{el.name}</h1>
            <div className='bid-pic'>
                <img src={el.item_url} alt="" />
                <div className='count-down'>
                    <h1>{timeRemaining.days} days</h1>
                    <h1>{timeRemaining.hours}:</h1>
                    <h1>{timeRemaining.minutes}:</h1>
                    <h1>{timeRemaining.seconds}</h1>
                </div>
            </div>
            <h1>due in...{el.exp}</h1>
            <h1>{el.highestPrice}</h1>
            <input type="number" onChange={onChangeHandler} />
            <button onClick={onClickHandler}>Place Bid</button>
        </div>
    )
}

export default Card