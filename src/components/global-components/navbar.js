import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
//                     <Link to="/"><img src={publicUrl+"/assets/img/logo.png"} alt="logo" /></Link>
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <div>
                <div className="navbar-area">
                <nav className="navbar navbar-area navbar-expand-lg">
                  <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                      <button className="menu toggle-btn d-block d-lg-none" data-toggle="collapse" data-target="#realdeal_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-left" />
                        <span className="icon-right" />
                      </button>
                    </div>
                    <div className="logo readeal-top">
                    {/*<Link to="/"><img src={publicUrl+"assets/img/NQD.png"} style={{height:"150px", width:"165px"}} alt="logo" /></Link>*/}
                    </div>
                  
                    <div className="collapse navbar-collapse" id="realdeal_main_menu">
                      <ul className="navbar-nav menu-open readeal-top">
                      <li>
                        <Link to = "/">Inicio</Link>

                      </li>
                    

                        <li className="menu-item-has-children">
                          <a href="#">Páginas</a>
                          <ul className="sub-menu">
                            <li><Link to="/About">Sobre nosotros</Link></li>
                            <li><Link to="/faq">Preguntas frecuentes</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/contact">Contáctanos</Link></li>
                      </ul>
                    </div>
                  
                  </div>
                </nav>
              </div>
            </div>
        )
    }
}


export default Navbar