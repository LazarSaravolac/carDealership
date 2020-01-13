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
        oil: 'all',
        modal:'all',
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
                order:"fields.price"
            });
            let cars = this.formatData(response.items);
            console.log(response.items,"a");
            
            let featuredCars = cars.filter(car => car.featured === true);
            let maxPrice = Math.max(...cars.map(item => item.price));
            let maxCylinderCap = Math.max(...cars.map(item => item.cylinder));
            let minCylinderCap = Math.min(...cars.map(item => item.cylinder));

            this.setState({
                cars,
                featuredCars,
                sortedCars:cars,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxCylinderCap,
                minCylinderCap
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


    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        },this.filterCars)
        console.log(target,name,value);
        
    }

    filterCars = () => {
        let { cars, type, price, minCylinderCap, maxCylinderCap, minPrice, maxPrice, oil, model, brand, noInvestment,registred } = this.state;
        let tempCars = [...cars];
        console.log(tempCars);
        
        price = parseInt(price);
        if (type !== 'all') {
            tempCars = tempCars.filter(car => car.type === type);
        }

        // if (model !== 'all') {
        //     tempCars = tempCars.filter(car => car.model === model);
        // }
    
        if (oil !== 'all') {
            tempCars = tempCars.filter(car => car.oil === oil);
        }

        if (brand !== 'all') {
            tempCars = tempCars.filter(car => car.brand === brand);
        }

        tempCars = tempCars.filter(car => car.price <= price);

        // let maxPrices = Math.max(tempCars.map(car=>car.price));
        // if(price!=maxPrices){
        //     tempCars = tempCars.filter(car => car.price <= price);
        // }

        // tempCars = tempCars.filter(car => car.cylinder >= minCylinderCap && car.cylinder <= maxCylinderCap);

           
        if (noInvestment) {
            tempCars = tempCars.filter(car => car.noInvestment === true);
        }

        if (registred) {
            tempCars = tempCars.filter(car => car.registred === true);
        }
        this.setState({
            sortedCars: tempCars
        },console.log(this.state.cars)
        )
    }

  render (){
  return(
    <CarContext.Provider value={{
          ...this.state,
           getCar:this.getCar,
           handleChange:this.handleChange
    }}>
        {this.props.children}
      </CarContext.Provider>
       )
  };
}

export function withCarConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <CarConsumer>
            {value => <Component {...props} context={value}/>}
        </CarConsumer>
    }
}


const CarConsumer = CarContext.Consumer;

export { CarProvider,CarConsumer, CarContext };