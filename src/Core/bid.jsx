import { Link } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from "react";
import { dataItems } from '../Data'
import Card from '../../Subcore/card_for_bid';

export const Bid = () => {

    //Data
    const [items, useItems] = useState(dataItems);
    //Time
    const [now, setNow] = useState(new Date().getTime());


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
//formatting the countdown

//set highest price in the data object seperately (data)




/*
 useEffect(() => {
     const intervalTask = setInterval(() => {
         const data = getTime(timeOut)
         setTimeRemaining({ ...data })
     }, 1000)
     return () => clearInterval(intervalTask);
 }, [])*/