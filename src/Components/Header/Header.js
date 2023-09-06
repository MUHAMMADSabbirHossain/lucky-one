import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav>
                <div><h2>Logo</h2></div>
                <h1>Anime Website!!!</h1>
                <div id='nav-menu'>
                    <a href="">Home</a>
                    <a href="">Category</a>
                    <a href="">API's Links</a>
                    <a href="">About Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;