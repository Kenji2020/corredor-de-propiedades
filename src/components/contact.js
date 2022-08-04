import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import FaqSection from "./section-components/faq";
import Footer from "./global-components/footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Contacto" />
      <div className="contact-area pd-top-100 pd-bottom-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-page-map">
                <iframe
                  width="600"
                  height="450"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL68lBEHFYpYRMQkPQDzVdYQ&key=AIzaSyBWUTcFpak3lHubIksNZHKaeSsSEk_1Hyk"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4">
              <form className="contact-form-wrap contact-form-bg">
                <h4>Contáctanos</h4>
                <div className="rld-single-input">
                  <input type="text" placeholder="Nombre" />
                </div>
                <div className="rld-single-input">
                  <input type="text" placeholder="Teléfono" />
                </div>
                <div className="rld-single-input">
                  <textarea rows={10} placeholder="Mensaje" defaultValue={""} />
                </div>
                <div className="btn-wrap text-center">
                  <button className="btn btn-success">Enviar</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row pd-top-92">
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-phone" />
                  Llámanos:
                </p>
                <h5>+569 57005236</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-envelope" />
                  ¿Tienes alguna pregunta?
                </p>
                <h5>contacto@nqd.cl</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-phone" />
                  Dirección
                </p>
                <h5>Avenida siempre viva 123</h5>
                <h5></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
