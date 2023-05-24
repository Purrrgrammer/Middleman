import React, { useState, useEffect, useReducer } from "react";

const App = () => {
    // const [itemList, setNewItems] = useState([])
    const [newItem, setNewItem] = useState({ name: '', img: '', price: '', description: '' })
    const defaultState = { itemList: [] };

    const reducer = (state, action) => {
        if (action.type === "ADD_ITEM") {
            const newItems = [...state.itemList, action.payload];
            return {
                ...state,
                newItems: newItems,
            };
        }
        if (action.type === "SOME_EMPTHY") {
            alert("please fill all the value")
            return {
                ...state,
            };
        }
        alert("Error by John")
        throw new Error("one of the values are empthy");
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleOnchange = (input) => {
        const name = input.target.name;
        const value = input.target.value;
        setNewItem({ ...newItem, [name]: value });
        console.log(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.name && newItem.img && newItem.price && newItem.description) {
            const recentlyNew = { ...newItem, id: new Date().getTime().toString() }
            dispatch({ type: "ADD_ITEM", payload: recentlyNew })
            setNewItem({ name: '', img: '', price: '', description: '' })
            // console.log(itemList)
        } else {
            dispatch({ type: "SOME_EMPTHY" })
        }

    }
    const [item, setItem] = useState(false)
    const showItems = () => {
        setItem(!item)
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <h1>this is react setup test</h1>
            <label htmlFor="firstName">Item Name : </label>
            <input type="value" id="itemName" name="itemName" value={item.name} onChange={handleOnchange} />
            <label htmlFor="itemPrice">Item Price : </label>
            <input type="value" id="itemPrice" name="itemPrice" value={item.price} onChange={handleOnchange} />
            <label htmlFor="itemPics">Item Images : </label>
            <input type="value" id="itemPics" name="itemPics" value={item.img} onChange={handleOnchange} />
            <label htmlFor="itemDescription">Item Description : </label>
            <input type="value" id="itemDescription" name="itemDescription" value={item.description} onChange={handleOnchange} />
            <button type="submit" onSubmit={handleSubmit}>Add your items</button>
            <button type="button" onClick={showItems}>Show Item</button>
        </form >
        {item && <AddedItem />
        }
        {/* <List /> */}
        {
            state.itemList.map((item) => {
                const { name, img, price, description, id } = item;
                return (
                    <div className="list">
                        <button className="btn" type="button">filter</button>
                        <div className="list-container">
                            <div className="individualItem" key={id}></div>
                            <h1>{name}</h1>
                            <img src={img} />
                            <h2>$ {price}</h2>
                            <h3>{description}</h3>
                        </div>
                    </div>
                );
            })
        }
    </>);
}

const AddedItem = () => {

    return (<><h1>This is the item</h1></>)
}

export default App;