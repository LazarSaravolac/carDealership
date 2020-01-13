import React from 'react'
import ImgSection from '../components/ImgSection';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedCars';
import Services from '../components/Services';
export default function Home() {
    return (
        <>
            <ImgSection imgClass="carImg">
                <Banner title="Prodaja vozila" subtitle="povoljne cene" >
                    <Link to="cars">
                    <button className="btn-primary">Nasa ponuda</button>
                    </Link>
                </Banner>
            </ImgSection>
            <FeaturedRooms/>
            <Services/>
        </>
    )
}
