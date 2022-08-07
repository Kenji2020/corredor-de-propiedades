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
          //console.log(datos)
          this.setState({ datos })

      })
    const $ = window.$;
    
     if ($('.single-select').length){
            $('.single-select').niceSelect();
        }
  }

    render() {
      //console.log(this.state.datos)

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+'assets/img/banner/1.jpg)',
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
              </div>
            </div>
          </div>
        </div>

        }
}

export default Banner