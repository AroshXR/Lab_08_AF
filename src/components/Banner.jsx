import React from 'react';

const Banner = ({ message, backgroundColor = '#007bff', textColor = '#fff' }) => {
    return (
        <div style={{
            backgroundColor: backgroundColor,
            color: textColor,
            padding: '40px 20px',
            textAlign: 'center',
            margin: '20px 0',
            borderRadius: '8px'
        }}>
            <h2>{message}</h2>
            <button style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: '#fff',
                color: backgroundColor,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>
                Learn More
            </button>
        </div>
    );
};

export default Banner;
