import React, { useState, useEffect, useReducer, Fragment } from "react";
import { reducer } from "./reducer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //import from external package installed
import { Navbar } from '../Core/navbar.jsx'
import { BuyAndSell } from '../Core/buyNsell'
import { Bid } from '../Core/bid.jsx'
import { Error } from '../Core/error'
import { Chat } from '../Core/chat'


//Reducer is a state management => then return the final vallue
//action = submit


const App = () => {

    //Main app Return
    return (<>
        <h1 className="logo">Middlemen</h1>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/buyandsell" element={<BuyAndSell />} />
                <Route exact path="/bid" element={<Bid />} />
                <Route exact path="/chat" element={<Chat />} />
                {/* <Route path="*" elementd={<Error />}></Route> */}
            </Routes>
        </Router>

    </>);
}



export default App;