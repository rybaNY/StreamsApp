import React from 'react';
import { Link } from 'react-router-dom'
import Auth from './Auth';

const Header = () => {
    return (
        <div className='ui menu'>
            <div className="header item">
                <Link to="/">Stream App</Link>
            </div>
            <div className="item right">
                <Link to="/">Stream List</Link>
            </div>
            <div className="item">
                <Auth />
            </div>

        </div>
    );
}

export default Header;
