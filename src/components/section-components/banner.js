import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import axios from 'axios';
import { DemoCarousel } from './carrusel';
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

    return <>
      <DemoCarousel/>
        </>

        }
}

export default Banner