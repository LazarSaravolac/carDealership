import React from 'react'
import CarFilter from './CarFilter';
import CarList from './CarList';
import { withCarConsumer } from '../context';
import Loading from './Loading';
import Title from '../components/Title';

function CarContainer({ context }) {
    const { loading, sortedCars, cars } = context;
       if (loading) {
       return <Loading/>
     }
    return (
        <>
            <section  style={{paddingTop:"30px"}}>
            </section>
            <CarFilter cars={cars} />
            <CarList cars={sortedCars} />
        </>
    );
}

export default withCarConsumer(CarContainer)