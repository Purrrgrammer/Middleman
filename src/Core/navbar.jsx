import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav>
            <Link to="/home"><h1 style={{ fontSize: "3rem", textAlign: 'center' }}>Middlemen</h1></Link>
            <ul>
                {/* <Link to='/'>Home</Link> */}
                <input type='text' placeholder='Search' />
                <button ></button>
                {/* <li><Link to="/bid">BID</Link></li> */}
                <li><Link to="/buyandsell">BUY/SELL</Link></li>
                <li><Link to="/chat">Chat</Link></li>
                <li>ABOUT US</li>
            </ul>
        </nav>);
}

export default Navbar;
