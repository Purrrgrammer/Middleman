import { Link } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from "react";
import { dataItems } from '../Data'
import Card from './card';

export const Bid = () => {

    //Data
    const [items, useItems] = useState(dataItems);
    //Time
    const [now, setNow] = useState(new Date().getTime());

    // console.log(dataItems[0].exp)

    //Items highest price 
    const [highestPrice, setHighestPrice] = useState(0);
    const [inputPrice, setInputPrice] = useState(0);
    //handler
    const onChangeHandler = (e) => {
        setInputPrice(e.target.value)
    };
    const onClickHandler = () => {
        highestPrice < inputPrice ? setHighestPrice(inputPrice) : alert('please enter the bigger price')
    };
    //Countdown Bidding
    //Without cleanup function
    /*
    useEffect(() => {
        const intervalTask = setInterval(() => {
            const data = getTime(timeOut)
            setTimeRemaining({ ...data })
        }, 1000)
        return () => clearInterval(intervalTask);
    }, [])*/

    // const { days, hours, minutes, seconds } = timeRemaining
    // dataItems.forEach(el => console.log("this is items id", el.id))

    return (
        <div>
            <div className='bid-item'>
                <div>
                    {items.map(el => {
                        return (
                            <Card el={el} onChangeHandler={onChangeHandler} onClickHandler={onClickHandler} />
                        )
                    })}
                </div>
            </div>
        </div>);
}

export default Bid;

//set ID to data

//What's left
//countdonwn dynamically

//whats left formatting the countdown

//iterate items data


//set highest price in the data object
//seperately