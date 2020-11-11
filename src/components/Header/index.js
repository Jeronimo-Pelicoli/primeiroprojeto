import React from 'react';
import './styles.css';

function Header() {
    return (
        <div className="header-header">
            <div className="logo"><p>jerestore</p></div>
            <div className="menu">
                <ul>
                    <li>reactjs</li>
                    <li>angularjs</li>
                    <li>vuejs</li>
                </ul>
            </div>
            <div className="login">
                <h1>login</h1>
                <h2>senha</h2>
            </div>
            
        </div>
    )
}

export default Header;