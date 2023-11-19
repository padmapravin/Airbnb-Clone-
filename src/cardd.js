import React from 'react';
import './Card.css'
import  { useState } from 'react';

function Cardd({ src, title, description, price,date,location }) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
                <h3>{date}</h3>
                <h3>{location}</h3>
                <button onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
            </div>
        </div>
    )
}

export default Cardd
