import React from 'react';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li> <a href="/"> Home </a></li>
                <li> <a href="/about">About Us</a></li>
                <li> <a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;