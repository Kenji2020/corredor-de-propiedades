import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import axios from 'axios';
class Banner   extends Component {
    state = {
      datos:{a:"a"}
    }
    componentDidMount() {
      axios.get('https://part1backend.herokuapp.com/banners')
      .then(res => {
          const data2 = res.data[Object.keys(res.data)[0]]
          const values = Object.keys(data2)
  
         let datos = {}
          values.forEach((key, index) => {
            datos[key] = data2[key]
          })
          console.log(datos)
          this.setState({ datos })

      })
    const $ = window.$;
    
     if ($('.single-select').length){
            $('.single-select').niceSelect();
        }
  }

    render() {
      console.log(this.state.datos)

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+'assets/img/banner/1.jpg)'
        }

    return <div className="banner-area jarallax" style={inlineStyle}>
          <div className="container">
            <div className="banner-inner-wrap">
              <div className="row">
                <div className="col-12">
                  <div className="banner-inner">
                    <h5 className="sub-title" style={{color: 'rgba(255,255,255)'}}>{ data.subtitle }</h5>
                    <h1 className="title" style={{color: 'white'}}>{ data.title1 } <br /> { data.title2 }</h1>
                  </div>
                </div>
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
                                  <option value={1}>Propiedades</option>
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
                                  <option value={1}>Propiedades</option>
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
              </div>
            </div>
          </div>
        </div>

        }
}

export default Banner