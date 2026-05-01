import React from 'react';

const Testimonial = ({ quote, name, photoUrl }) => {
    return (
        <div style={{
            border: '1px solid #eee',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '500px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px'
        }}>
            <img src={photoUrl || 'https://via.placeholder.com/80'} alt={name} style={{
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                marginBottom: '15px'
            }} />
            <p style={{ fontStyle: 'italic', color: '#555' }}>"{quote}"</p>
            <h4 style={{ margin: '10px 0 0' }}>- {name}</h4>
        </div>
    );
};

export default Testimonial;
