import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerdata from '../../data/footerdata.json';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+footerdata.footerbg+')'
        }

        return (
             <footer className="footer-area style-two ">
              <div className="container d-flex justify-content-center">
              
                  <div className="footer-top">
                  <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-8">
                      <div className="footer-social">
                        <span className='ml-5'>Síguenos</span>
                        <ul className="social-icon">
                         { footerdata.socialicon.map( ( item, i )=>
                            <li key={i}>
                              <a href={ item.url } target="_blank"><i className={ item.icon } /></a>
                            </li>
                          ) }
                        </ul>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </footer>

        )
    }
}


export default Footer_v1