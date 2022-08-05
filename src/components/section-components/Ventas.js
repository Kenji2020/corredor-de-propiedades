import React from 'react'
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
export const Ventas =()=> {
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
