import React from 'react'
import Car from '../components/Car';

import Title from '../components/Title';
export default function CarList({ cars }) {
    
    if (cars.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no cars mathced your search params</h3>
            </div>
        )
    }

    return (
        <section className="carslist">
            <div className="carslist-center">
                
            {
                cars.map(item => {
                    return <Car key={item.id} car={item}/>
                })
            }
            </div>
        </section>
    )
}
