import React from 'react';
import logo from '../../images/logo.png'
import { BsFillCartFill } from 'react-icons/bs';

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav><a href="/shop">Shop</a>
            <a href="/orders">Orders Review</a>
            <a href="/inventory"> Manage inventory</a>
            </nav>
            <div className='search-container'>
                <input type="text" className='search-input' placeholder='type here to search' />
               <span><BsFillCartFill></BsFillCartFill></span>
            </div>

        </div>
    );
};

export default Header;