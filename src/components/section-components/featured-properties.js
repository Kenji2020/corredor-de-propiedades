import React, { Component, useContext, useEffect } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import CasasContext from "../../CasasContext"

const Featured = ({Customclasss}) => {
  


        const {data, setData, dataToShow, setDataToShow} = useContext(CasasContext)
    
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data2 = sectiondata.featuredproperties
      
 
        let Customclass = Customclasss ? Customclasss : 'pd-top-60'
      useEffect(() => {
        console.log("re render")
        console.log("data to show", dataToShow)
        console.log("data", data)
      }, [dataToShow])
      


    return (<div className={"featured-area  "+Customclass}>
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">{ data2.title }</h2>
            </div>
            <div className="row justify-content-center">
            {
              dataToShow. length === 11 ?               <div className="col-xl-6 col-lg-8">
                <div className="single-leading-feature">
                  <div className="slf-overlay" />
                  <div className="thumb">
                    <img src={publicUrl+data2.firstitem.image2} styles={{height: '100%', width: '500px'}} alt={ imagealt } />
                    <img src={publicUrl+data2.firstitem.image} styles={{height: '100%', width: '500px'}} alt={ imagealt } />

                  </div>
                  <div className="details">
                    <h4 className="title readeal-top"><Link to={ data2.firstitem.url  }>{ data2.firstitem.title }</Link></h4>
                    <h5 className="price">{ data2.firstitem.price }</h5>
                    <span>{ data2.firstitem.content }</span>
                  </div>
                </div>
                
              </div> : null
            }

              { dataToShow.map( ( item, i )=>
                  <div key={ i } className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="single-feature">
                      <div className="thumb">
                        <img src={ publicUrl+item.image } style={{height: '500px', width: '500px'}} alt={ imagealt } />
                      </div>
                      <div className="details">
                        
                        <p className="author"><i className="fa fa-user" /> { item.authorname }</p>
                        <h6 className="title readeal-top"><Link to={ item.url }>{ item.title }</Link></h6>
                        <h6 className="price">{ item.newerprice }</h6><del>{ item.olderprice }</del>
                        <ul className="info-list">

                         
                          <li><img src={publicUrl+"assets/img/icons/7.png"} alt="img" /> { item.area }</li>
                        </ul>
                        <ul className="contact-list">
                          <li><a className="phone" href="#/contact#/contact"><i className="fa fa-phone" /></a></li>
                          <li className="readeal-top"><Link className="btn btn-yellow" to={item.url}>Ver detalles</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
               ) }
              
            </div>
          </div>
        </div>)



        
}

export default Featured