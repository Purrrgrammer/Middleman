import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../Data'

export const Navbar = () => {

    const search = (input) => {
        // data.find((el) => )
    }
    return (
        <nav>
            <ul>
                {/* <Link to='/'>Home</Link> */}
                <input type='text' placeholder='Search' />
                <button ></button>
                <li><Link to="/bid">BID</Link></li>
                <li><Link to="/buyandsell">BUY/SELL</Link></li>
                <li><Link to="/chat">Chat</Link></li>
                <li>ABOUT US</li>
            </ul>
        </nav>);
}

export default Navbar;
