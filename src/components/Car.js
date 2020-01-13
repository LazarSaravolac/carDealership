import React from 'react'
import { Link } from 'react-router-dom';
export default function Car({ car }) {
    const { price, images, name, slug } = car;
    return (
        <article className="car">
              <div className="img-container">
                <img src={images[0]} alt="single car" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>Akcija</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary car-link">
                    Detalji
                </Link>
                <p className="car-info">{name}</p>
            </div>
        </article>
    )
}
