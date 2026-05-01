import React from 'react';

const Button = ({ label, onClick, styleType = 'primary', size = 'medium' }) => {
    const baseStyle = {
        padding: size === 'large' ? '12px 24px' : size === 'small' ? '6px 12px' : '8px 16px',
        fontSize: size === 'large' ? '18px' : size === 'small' ? '14px' : '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
        margin: '5px'
    };

    const typeStyles = {
        primary: { backgroundColor: '#007bff', color: '#fff' },
        secondary: { backgroundColor: '#6c757d', color: '#fff' },
        success: { backgroundColor: '#28a745', color: '#fff' },
        danger: { backgroundColor: '#dc3545', color: '#fff' }
    };

    const finalStyle = { ...baseStyle, ...typeStyles[styleType] };

    return (
        <button style={finalStyle} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
