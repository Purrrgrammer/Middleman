
import React, { useState, useEffect, useReducer } from "react";

function Card({ el, onChangeHandler, onClickHandler }) {
    const [timeOut, setTimeOut] = useState(new Date().getTime());
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    //Items highest price 
    const [inputPrice, setInputPrice] = useState(0);

    const getTime = (timeOut) => {
        const now = new Date().getTime();
        let difference = (timeOut - now) / 1000
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
            <input type="number" onChange={onChangeHandler = (e) => {
                setInputPrice(e.target.value)

            }} />
            <button onClick={onClickHandler = () => {
                el.highestPrice < el.inputPrice ? el["highestPrice"] = el.inputPrice : alert('please enter the bigger price')
                console.log(el.highestPrice)
            }}>Place Bid</button>
        </div >


    )
}

//onchange onclick เปลี่ยนค่า property name ชื่อ highestPrice ที่อยู่ใน object data ตามเงื่อนไข


export default Card

//ปัญหา 1 (ที่กำลังทำอยู่)
//ใส่funcitonality ลงไปใน prop ของ input button
/* ดังนี้
    < input type = "number" onChange = {
        onChangeHandler = (e) => {
            setInputPrice(e.target.value)

        }
    } />
        <button onClick={onClickHandler = () => {
            el.highestPrice < el.inputPrice ? setHighestPrice(el.inputPrice) : alert('please enter the bigger price')
            console.log(el.highestPrice)
        }}>Place Bid</button>
*/
// Problem => prop ที่ส่งไปเป็นundefinedในcomponentหลัก เพราะไม่ได้มีการประกาศตัวแปร ลงในcomponentรอง



//ปัญหา 2
//ประกาศตัวแปรและการทำงานของ function ลงในcomponent รองก่อนrender
/*
const onChangeHandler = (e) => {
    setInputPrice(e.target.value)
}

    }
const onClickHandler = () => {
    el.highestPrice < el.inputPrice ? setHighestPrice(el.inputPrice) : alert('please enter the bigger price')
    console.log(el.highestPrice)
};
* /
//แต่ก็ยังเจอปัญหาที่การรับค่าหลัง render ใน component รอง







//Handler Copies
/* 

const onChangeHandler = (e) => {
    setInputPrice(e.target.value)

}
const onClickHandler = () => {
    el.highestPrice < el.inputPrice ? setHighestPrice(el.inputPrice) : alert('please enter the bigger price')
    console.log(el.highestPrice)
}; 
*/