import React, { useState, useEffect, useReducer } from "react";


const Test = () => {
    const [newItem, setNewItem] = useState("")
    const itemStorage = { name: [] };

    const reducer = (action, state) => {
        if (action.type === 'ADD') {
            const addedItem = [...state.name, action.payload];
            return {
                ...state,
                name: addedItem,
            }
        } else console.log('failed')

    };
    const [state, dispatch] = useReducer(reducer, itemStorage);


    const handleOnChange = (property) => {
        const name = property.target.name;
        const value = property.target.value;
        console.log(name, value)


    }

    const onSubmit = (e, index) => {
        e.preventDefault();
        if (newItem.name) {
            const incomingInput = { ...newItem, id: index }
            console.log(incomingInput)
            dispatch({ type: "ADD", payload: incomingInput })
            setNewItem({ name: '' })
        }

        else {
            console.log("error")
        }
    };
    return (

        <>
            <h1>This is form test</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="name"></label>
                <input type='value' id='name' name="name" onChange={handleOnChange} value={newItem.name} />
                <button type='submit'>add name</button>
            </form>


        </>



    );


}



export default Test;