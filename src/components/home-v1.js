import React, { useState } from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Service from './section-components/service';
import Explore from './section-components/explore';
import FeaturedProperties from './section-components/featured-properties';
import Ads from './section-components/ads';
import PropertiesByCities from './section-components/properties-by-cities';
import RecentProperties from './section-components/recent-properties';
import FeaturedPorject from './section-components/featured-project';
import WhyChooseUs from './section-components/why-choose-us';
import OurPartner from './section-components/our-partner';
import Footer from './global-components/footer';
import {Ventas} from './section-components/Ventas';
import Casas from "../CasasContext"
import sectiondata from '../data/sections.json';

const Home_V1 = () => {

    //let data = sectiondata.featuredproperties.items
    //const [data, setData] = useState(sectiondata.featuredproperties.items)
    const [data, setData ] =  useState( sectiondata.featuredproperties.items   )
    const [dataToShow, setDataToShow] = useState(data)
    return <div>
    <Casas.Provider value={{data, setData, dataToShow, setDataToShow}}>


        <Navbar />
        <Banner />
        <Ventas />
        <FeaturedProperties />
       {/*  <PropertiesByCities /> */}
        {/* <RecentProperties /> */}
        {/* <FeaturedPorject /> */}
        <WhyChooseUs />
        <Footer />
        </Casas.Provider>
    </div>
}

export default Home_V1

