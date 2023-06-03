import { Link } from 'react-router-dom';
import React, { useState, useEffect, useReducer } from "react";
import { reducer } from "../Components/reducer";

export const BuyAndSell = () => {
    // const [itemList, setNewItems] = useState([])
    const [newItem, setNewItem] = useState({ name: '', img: '', price: '', description: '' })
    const defaultState = { itemList: [] };
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleOnchange = (input) => {
        const name = input.target.name;
        const value = input.target.value;
        setNewItem({ ...newItem, [name]: value });
        console.log(name, value);
        console.log("this is list", newItem)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.name && newItem.img && newItem.price && newItem.description) {
            const recentlyNew = { ...newItem, id: new Date().getTime().toString() } //...newItem = previous propvalue then add new unique id to the item prop
            dispatch({ type: "ADD_ITEM", payload: recentlyNew }) //add new prop when submitted
            setNewItem({ name: '', img: '', price: '', description: '' })
            console.log('successfully submittedd')
            console.log(defaultState)
        } else {
            dispatch({ type: "SOME_EMPTHY" })
        }

    }
    const [item, setItem] = useState(false)
    const showItems = () => {
        setItem(!item)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Item Name : </label>
                <input type="value" id="itemName" name="name" value={newItem.name} onChange={handleOnchange} />
                <label htmlFor="itemPrice">Item Price : </label>
                <input type="value" id="itemPrice" name="price" value={newItem.price} onChange={handleOnchange} />
                <label htmlFor="itemPics">Item Images : </label>
                <input type="value" id="itemPics" name="img" value={newItem.img} onChange={handleOnchange} />
                <label htmlFor="itemDescription">Item Description : </label>
                <input type="value" id="itemDescription" name="description" value={newItem.description} onChange={handleOnchange} />
                <div style={{ margin: '10px 0' }}>
                    <button type="submit" onSubmit={handleSubmit}>Add your items</button>
                    <button type="button" onClick={showItems}>Show Item</button>
                </div>
            </form >
            {
                state.itemList.map((item) => {
                    const { name, img, price, description, id } = item;
                    return (
                        <div className="list">
                            <button className="btn" type="button">filter</button>
                            <div className="list-container">
                                <div className="individualItem" key={id}>
                                    <h1>{name}</h1>
                                    <img src={img} />
                                    <h2>$ {price}</h2>
                                    <h3>{description}</h3>
                                </div>
                            </div>
                        </div>
                    );
                })
            }

        </>
    )
}

export default BuyAndSell;
