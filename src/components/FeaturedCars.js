import React, { Component } from 'react';
import { CarContext } from '../context';
import Car from './Car';
import Title from '../components/Title';
export default class FeaturedCars extends Component {

    static contextType = CarContext;
    render (){
        let { featuredCars: cars } = this.context;
        console.log(cars);
        
        cars = cars.map((car,index) => {
            return <Car key={index} car={car}/>
        })
  return(
      <div className="featured-cars">
          <Title title="Akcijska ponuda"/>
          <div className="featured-cars-center">
           {cars}
          </div>
      </div>
       )
  };
}