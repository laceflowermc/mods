import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className="Header">
            <div className="Header-title">
                <div>Blake's Mods</div>
            </div>
            <div className="Header-nav">
                <div className="Header-nav-item">CurseForge</div>
                <div className="Header-nav-item">Github</div>
            </div>
        </div>
    );
}

export default Header;