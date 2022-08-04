import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class ServiceTwo extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.servicetwo
        const inlineStyle = {
               backgroundImage: 'url('+publicUrl+'/assets/img/bg/5.png)'
        }


    return <div className="service-area-about mg-bottom-100 pb-xl-5 pd-0">
        <div className="container">
          <div className="section-title">
            <h5 className="sub-title">{ data.subtitle }</h5>
            <h2 className="title">{ data.title }</h2>
            <p>{ data.content1 }<br /> { data.content2 }</p>
          </div>
          <div className="service-slider-2 row pb-xl-5 pd-0"> 
          </div>
        </div>
      </div>
        }
}

export default ServiceTwo