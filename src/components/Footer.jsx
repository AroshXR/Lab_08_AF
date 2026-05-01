import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '20px', backgroundColor: '#222', color: '#ccc', marginTop: '40px' }}>
            <p>&copy; {new Date().getFullYear()} My Web App. All rights reserved.</p>
            <div>
                <a href="#" style={{ color: '#ccc', marginRight: '10px' }}>Facebook</a>
                <a href="#" style={{ color: '#ccc', marginRight: '10px' }}>Twitter</a>
                <a href="#" style={{ color: '#ccc' }}>LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
