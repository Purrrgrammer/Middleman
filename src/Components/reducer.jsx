export const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const newItems = [...state.itemList, action.payload]; //iterate previous item from the previous state 
        return {
            ...state, //return previous state (default state)
            itemList: newItems, //add new item along with its id added(payload)
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