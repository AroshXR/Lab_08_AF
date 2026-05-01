import React from 'react';

const NavBar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Products</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a></li>
                <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
