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
                {/* <div className="car-hover-text">
                    <h6>{name}</h6>
                </div> */}
                <Link to={`/singleCar/${slug}`} className="btn-primary car-link">
                    Detalji
                </Link>
                <p className="car-info">{name}</p>
            </div>
        </article>
    )
}
