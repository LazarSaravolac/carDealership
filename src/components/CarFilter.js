import React from 'react'
import { CarContext } from '../context';
import { useContext } from 'react';
import Title from '../components/Title';
const getUnique = (items, value) => {
    return[...new Set(items.map(item =>item[value]))]
}

export default function CarFilter({ cars }) {
    
    const context = useContext(CarContext);
    
        let {handleChange,type, price, minCylinderCap, maxCylinderCap, minPrice, maxPrice, oil, model, brand, noInvestment,registred } = context;
    let types = getUnique(cars, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    
    let oils = getUnique(cars, 'oil');
    oils = ['all', ...oils];
    oils= oils.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    // let models = getUnique(cars, 'model');
    // models = ['all', ...models];
    // models= models.map((item, index) => {
    //     return <option value={item} key={index}>{item}</option>
    // })


    let brands = getUnique(cars, 'brand');
    brands = ['all', ...brands];
    brands= brands.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
                <Title title="Ponuda automobila" />
                <form className="filter-form">
                 {/* select brand */}
                 <div className="form-group">
                        <label htmlFor="brand"> Marka</label>
                        <select name="brand" id="brand" value={brand} className="form-control"
                            onChange={handleChange}> {brands}</select>
                    </div>
                    {/* end brand */}
                    {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type"> Tip vozila</label>
                        <select name="type" id="type" value={type} className="form-control"
                            onChange={handleChange}> {types}</select>
                    </div>
                    {/* end select type */}
                    {/* select oil */}
                    <div className="form-group">
                        <label htmlFor="oil"> Gorivo</label>
                        <select name="oil" id="model" value={oil} className="form-control"
                            onChange={handleChange}> {oils}</select>
                    </div>
                {/* end oil */}
                    {/* car price */}
                    <div className="form-group">
                        <label htmlFor="price">
                            Cena ${price}
                        </label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price}
                        onChange={handleChange} className="form-control"/>
                    </div>
                {/* end of car price */}
                
                {/* size */}
                <div className="form-group">
                        <label htmlFor="size">Zapremina motora</label>
                        <div className="size-inputs">
                            <input type="number" name="minCylinderCap" id="size"
                                value={minCylinderCap} onChange={handleChange}
                                className="size-input" />
                             <input type="number" name="maxCylinderCap" id="size"
                                value={maxCylinderCap} onChange={handleChange}
                                className="size-input"/>
                        </div>
                    </div>
                {/* end of size */}
                
                {/* extras */}
                <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="noInvestment" id="noInvestment" checked={noInvestment} onChange={handleChange} />
                            <label htmlFor="noInvestment">bez ulaganja</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="registred" id="registred" checked={registred} onChange={handleChange} />
                            <label htmlFor="registred">registrovan</label>
                    </div>
                    </div>
                    {/* end of extras */}
                </form>
        </section>
    )
}
