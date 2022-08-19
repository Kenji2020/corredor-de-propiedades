import React,{useRef, useState} from "react";
import emailjs from '@emailjs/browser';

import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import FaqSection from "./section-components/faq";
import Footer from "./global-components/footer";

const Contact = () => {

  const [data, setData ] = useState({
    user_name : '',
    user_email : "",
    message : ''
  })

  const form = useRef();
  const ref = useRef();
  const sendEmail = (e) => {
    
    if(data.user_name.length <2 || data.user_email.length <2 || data.message.length <2){
      alert('campos vacios o incorrectos')
      return
    }
    emailjs.send('service_htvx45q', 'template_6a6uu6p', data, 'SdA7vrvy_dyS3YLf1')
      .then((result) => {
          //console.log(data.user_name);
          alert('Correo enviado correctamente')
          setData({
            user_name : '',
            user_email : "",
            message : ''
          })
      }, (error) => {
          console.log(error.text);
          alert('Ha ocurrido un error, inténtalo  más tarde')
      });
      e.target.reset()
  };
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
              <form className="contact-form-wrap contact-form-bg" ref={form} onSubmit={(e) => sendEmail(e)}>
                <h4>Contáctanos</h4>
                <div className="rld-single-input">
                  <input type="text" placeholder="Nombre"  onChange={(e) => setData({...data, user_name: e.target.value})} name="user_name" />
                </div>
                <div className="rld-single-input">
                  <input type="email" placeholder="Correo electrónico"  onChange={(e) => setData({...data, user_email: e.target.value})} name="user_email"/>
                </div>
                <div className="rld-single-input">
                  <textarea rows={10} placeholder="Mensaje" name="message" onChange={(e) => setData({...data, message : e.target.value })}  defaultValue={""} />
                </div>
                <div className="btn-wrap text-center">
                  <button className="btn btn-success" value="Send" type="submit">Enviar</button>
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
                <h5>+56 9 9550 0211</h5>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="single-contact-info">
                <p>
                  <i className="fa fa-envelope" />
                  ¿Tienes alguna pregunta?
                </p>
                <h5>nquintana@nqd.cl</h5>
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
