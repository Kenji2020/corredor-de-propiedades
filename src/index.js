import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import blogdata from './data/blogdata.json';
import Singleblogdata from './data/single-blogdata.json';
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import Property from './components/property';
import AvilableProperty from './components/availavbe-property';
import PropertiesByCity from './components/properties-by-city';
import RecentProperties from './components/recent-properties';
import PropertyDetails from './components/property-details';
import About from './components/about';
import Advisor from './components/advisor';
import Pricing from './components/pricing';
import UserList from './components/user-list';
import Registraion from './components/registration';
import Error from './components/error';
import Faq from './components/faq';
import News from './components/news';
import NewsDetails from './components/news-details';
import Contact from './components/contact';
import SearchMap from './components/search-map';
import SearchGrid from './components/search-grid';
import SearchList from './components/search-list';
import AddNew from './components/add-property';
import Inicio from "./components/inicio-de-sesion/Inicio"
import detalles_maihue_terreno from './components/detalles-maihue-terreno';
import detalles_galletue_terreno from './components/detalles-galletue-terreno'
import detalles_calafquen_terreno from './components/detalles-calafquen-terreno'
import parcelas_lago_maihue from './components/parcelas-lago-maihue'
import parcelas_lago_calafquen from './components/detalles-calafquen-parcelas'
import detalles_parcelasPrivilegiadas from './components/detalles-parcelasPrivilegiadas'
import detalles_lago_galletue from './components/detalles-lago-galletue'
import parcela_villarrica from './components/parcela_villarrica'
import oficina_costanera from './components/oficina_costanera'
import depto_amplio from './components/depto_amplio'
import terreno_cerca_villarrica from './components/terreno_cerca_villarrica'


class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                <div>
                <Switch>
                    <Route exact path="/" component={HomeV1} />
                    {/* 
                    <Route path="/home-v2" component={HomeV2} />
                    <Route path="/home-v3" component={HomeV3} />
                    <Route path="/home-v4" component={HomeV4} />
                     */}
                    <Route path="/property" component={Property} />
                    <Route path="/availavbe-property" component={AvilableProperty} />
                    <Route path="/properties-by-city" component={PropertiesByCity} />
                    <Route path="/recent-properties" component={RecentProperties} />
                    <Route path="/property-details" component={PropertyDetails} />
                    <Route path="/about" component={About} />
                    <Route path="/user-list" component={UserList} />
                    {/* <Route path="/registration" component={Registraion} /> */}
                    <Route path="/faq" component={Faq} />
                    {/* <Route path="/news" component={News} /> */}
                    {/* <Route path="/news-details" component={NewsDetails} /> */}
                    <Route path="/contact" component={Contact} />
                    {/* <Route path="/search-map" component={SearchMap} /> */}
                    {/* <Route path="/search-grid" component={SearchGrid} /> */}
                    {/*<Route path="/search-list" component={SearchList} /> */}
                    <Route path="/add-property" component={AddNew} />
                    <Route path="/detalles_maihue_terreno" component={detalles_maihue_terreno} />
                    <Route path="/detalles_galletue_terreno" component={detalles_galletue_terreno} />
                    <Route path="/detalles_calafquen_terreno" component={detalles_calafquen_terreno} />
                    <Route path="/parcelas_lago_maihue" component={parcelas_lago_maihue} />
                    <Route path="/parcelas_lago_calafquen" component={parcelas_lago_calafquen} />
                    <Route path="/parcelas_parcelasPrivilegiadas" component={detalles_parcelasPrivilegiadas} />
                    <Route path="/detalles_lago_galletue" component={detalles_lago_galletue} />
                    <Route path="/parcela_villarrica" component={parcela_villarrica} />
                    <Route path="/oficina_costanera" component={oficina_costanera} />
                    <Route path="/depto_amplio" component={depto_amplio} />
                    <Route path="/terreno_cerca_villarrica" component={terreno_cerca_villarrica} />

                    <Route path="/*" component={Error} />
                </Switch>
                </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('realdeal'));
