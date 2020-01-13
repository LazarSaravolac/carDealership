import React, { Component } from 'react';
import ImgSection from '../components/ImgSection';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { CarContext } from '../context';
import Title from '../components/Title';
export default class SingleCar extends Component {

    state = {
        slug: this.props.match.params.slug,
    }
    static contextType = CarContext;
    render() {
        const { getCar } = this.context;
        const car = getCar(this.state.slug);
        console.log(car);
        if (!car) {
            return <div></div>
        }
        
  return(
      <>    <section className="single-car">

          <section className="title" style={{marginTop:"20px"}}>
          <Title title={`${car.name}`}/>
          </section>
          <section className="single-car-container">
              <img src={car.images[0]} alt="" />   
              <p>{car.price} $</p>
          </section>

          <section className="single-car-infos">
              <article>
                  <h1>marka vozila</h1>
                  <p>{car.brand}</p>
              </article>
              <article>
                  <h1>model vozila</h1>
                  <p>{car.model}</p>
              </article>
              <article>
                  <h1>tip vozila</h1>
                  <p>{car.type}</p>
              </article>
              <article>
                  <h1>vrsta goriva</h1>
                  <p>{car.oil}</p>
              </article>
              <article>
                  <h1>cena vozila</h1>
                  <p>{car.price}</p>
              </article>
              <article>
                  <h1>kubikaza vozila</h1>
                  <p>{car.cylinder}</p>
            </article>
          </section>

          <section className="single-car-info">
              <article className="desc">
                    <div className="info">INFORMACIJE</div>
                  <span>
                  {car.description}
                  </span>
              </article>
              
              <article className="extras">
              <div className="info">OPREMA</div>
                  <span>
                  {car.extrass.map((extra, index) => {
                      return <p key={index}>- {extra}</p>
                    })}
                    </span>
              </article>
          </section>
          <section className="single-car-gallery">
              {car.images.map((img, index) => {
                  
                return <img src={img} key={index} alt=""/>
            })}
          </section>
      </section>
      </>
       )
  };
}