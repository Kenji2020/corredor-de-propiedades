import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import FaqSection from './section-components/faq';
import Footer from './global-components/footer-v2';

const Faq = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Centro de ayuda" />
        <FaqSection />
        <Footer />
    </div>
}

export default Faq

