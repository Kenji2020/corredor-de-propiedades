import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
export const Ventas =(props)=> {
  const [currentFruit, setCurrentFruit] = React.useState([])
  const [currentFruitIndex, setCurrentFruitIndex] = React.useState([])
  let publicUrl = process.env.PUBLIC_URL+'/'
  let imagealt = 'image'
  let data = sectiondata.featuredproperties.items
  let filteredAutos= []
  const handleChange = (newFruit, newPrice) => {
    console.log(newFruit)
    let filtered = data.filter(item => item.ciudad.includes((newFruit)))
    let filteredPrecio = data.filter(item => item.newerprice.includes((newPrice)))
    console.log(filtered)
    console.log(filteredPrecio)
    setCurrentFruit(filtered)
    setCurrentFruitIndex(filteredPrecio)
  }
  
    return (
        <div className="col-12">
                  <div className="banner-search-wrap">
                    <ul className="nav nav-tabs rld-banner-tab">
                      <li className="nav-item">
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
                              <select className="select single-select" onChange={(event) => handleChange(event.target.value)}
                                value={currentFruit}>
                                  <option value={1}>Precio</option>
                                  <option value={'Santiago'}>Santiago</option>
                                  <option value={'Maihue'}>Maihue</option>
                                  <option value={'Galletue'}>Galletue</option>
                                  <option value={'Calafquén'}>Calafquén</option>
                                  <option value={'Villarrica'}>Villarrica</option>                                 

                                </select>
                              </div>
                            </div>                      
                            <div className="col-xl-2 col-lg-4 col-md-4">
                              <div className="rld-single-select">
                                <select className="select single-select" onChange={(event) => handleChange(event.target.value)}
                                value={currentFruit}>
                                  <option value={1}>Precio</option>
                                  <option value={2}>$0 - $60.000.000</option>
                                  <option value={3}>$60.000.000 - $100.000.000</option>
                                  <option value={3}>$100.000.000 - $500.000.000</option>
                                  <option value={3}>$500.000.000 - $800.000.000</option>                                 
                                </select>
                              </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 readeal-top">
                              <button className="btn btn-yellow" to="/">Buscar</button>                              
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
                              <Link className="btn btn-yellow" to="/">Buscar</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}
