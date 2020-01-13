import React, { Component } from 'react';
import Client from './Contentful';

const CarContext = React.createContext();

class CarProvider extends Component {

    state = {
        cars: [],
        sortedCars: [],
        featuredCars: [],
        loading: true,
        brand: 'all',
        type: 'all',
        oil:'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minCylinderCap: 0,
        maxCylinderCap: 0,
        noInvestment: false,
        registred:false
    };


    getData = async() => {
        try {
            let response = await Client.getEntries({
                content_type: "cars",
                order:"sys.createdAt"
            });
            let cars = this.formatData(response.items);
            let featuredCars = cars.filter(car => car.featured === true);
            

            this.setState({
                cars,
                featuredCars
            })
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    componentDidMount() {
        this.getData();
    }

    getCar=(slug)=> {
        let car =this.state.cars.find(car => car.slug === slug);
        return car;
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let car = { ...item.fields, images, id };
            return car;

        })

        return tempItems;
    }



  render (){
  return(
    <CarContext.Provider value={{
          ...this.state,
           getCar:this.getCar 
    }}>
        {this.props.children}
      </CarContext.Provider>
       )
  };
}


const CarConsumer = CarContext.Consumer;

export { CarProvider,CarConsumer, CarContext };