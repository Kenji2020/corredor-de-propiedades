import { findByAltText } from '@testing-library/react';
import React,{ useState, useEffect, useContext} from 'react'
import { Link, Redirect } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import CasasContext from "../../CasasContext"


export const Ventas =(props)=> {
  const {data, setData, dataToShow, setDataToShow} = useContext(CasasContext)


  //let data = sectiondata.featuredproperties.items
/*   let data =[
    {title : "titulo 1", ciudad: "ciudad 1", precio :"precio 1"},
    {title : "titulo 2", ciudad: "ciudad 2", precio :"precio 2"},
    {title : "titulo 3", ciudad: "ciudad 3", precio :"precio 3"},
  ]   */

const [filter, setFilter] = useState({
  title : "",
  ciudad : "",
  precio : "999999999"
})



const handleInput = (field) => (e) =>  {
  const { value } = e.target
  setFilter({
    ...filter,
    [field] : value
  })  
}

const filtrar = () => {
  const filtrado = data.filter(function (el) {
    return el.ciudad === filter.ciudad && Number(el.precio) <= Number(filter.precio)
  })
  setDataToShow(filtrado)
  if(filtrado.length === 0){
    console.log("fallo")
    setDataToShow(data)
  }
}
  
  let publicUrl = process.env.PUBLIC_URL+'/'
  let imagealt = 'image'

  
console.log("data",dataToShow)

    return (
        <div className="">
                  <div className="banner-search-wrap " >
                    <ul className="nav nav-tabs rld-banner-tab d-flex justify-content-center">
                      <li className="nav-item ">
                        <a className="nav-link active" data-toggle="tab" href="#tabs_1">En venta</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs_2">En renta</a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="tabs_1">
                        <div className="rld-main-search">
                          <div className="row">                       
                            <div className="col-xl-2 col-lg-6 col-md-6">
                              <div className="rld-single-select">
                                <select className="select nice-select" defaultValue={''} onChange={handleInput('ciudad')}>
                                  <option value={''}  >Ciudades</option>
                                  <option value={'Maihue'}  >ciudad 1</option>
                                  <option value={'Galletue'}>ciudad 2</option>
                                  <option value={'Calafquén'}>ciudad 3</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>                      
                            <div className="col-xl-2 col-lg-4 col-md-6">
                              <div className="rld-single-select">
                                <select className="select nice-select" defaultValue={''} onChange={handleInput('precio')}>
                                  <option value={''}>desde </option>
                                  <option value={'50000000'}>50 millonacos</option>
                                  <option value={'100000000'}>100 millonacos</option>
                                  <option value={'200000000'}>200 millonacos</option>
                                  <option value={'300'}>$100.000.000 - $500.000.000</option>
                                  <option value={3}>$500.000.000 - $800.000.000</option>
                                  
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                            <button onClick={filtrar} className="btn btn-yellow">filtro</button>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tabs_2">
                        <div className="rld-main-search">
                          <div className="row">                            
                            <div className="col-xl-2 col-lg-6 col-md-6">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Región</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Ciudad</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Baños</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Habitaciones</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4">
                              <div className="rld-single-select">
                                <select className="select single-select">
                                  <option value={1}>Precio</option>
                                  <option value={2}>Opción 1</option>
                                  <option value={3}>Opción 2</option>
                                  <option value={3}>Opción 3</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                              <button onClick={filtrar}>filtro</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}
