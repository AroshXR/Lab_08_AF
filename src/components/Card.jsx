import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', maxWidth: '300px', margin: '20px auto' }}>
            <img src={imageUrl || 'https://via.placeholder.com/150'} alt={title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
