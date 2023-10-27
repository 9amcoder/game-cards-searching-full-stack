import React from 'react';
import './Card.css';

type CardProps = {
    name: string;
    image_uris?: {
        small: string;
    };
    oracle_text: string;
    price?: string;
    releaseDate?: string;
}

const CardComponent: React.FC<CardProps> = ({ name, image_uris, oracle_text, price, releaseDate }) => {
    return (
        <div className="card">
            {
                image_uris && image_uris.small &&
                <img className="card-img" src={image_uris.small} alt={name} />
            }
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{oracle_text}</p>
            {
                price &&
                <p className="card-price">$USD:{price}</p>
            }
            {
                releaseDate &&
                <p className="card-text">Release Date:{releaseDate}</p>
            }
        </div>
    );
};

export default CardComponent;