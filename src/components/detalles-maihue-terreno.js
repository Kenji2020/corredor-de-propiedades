import React, { Component, useRef } from "react";
import sectiondata from "../data/sections.json";
import parse from "html-react-parser";
import emailjs from '@emailjs/browser';
export const PropertyDetails = () =>{
    

    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_htvx45q', 'template_6a6uu6p', form.current, 'SdA7vrvy_dyS3YLf1')
          .then((result) => {
              console.log(result.text);
              alert('Correo enviado correctamente')
          }, (error) => {
              console.log(error.text);
              alert('Ha ocurrido un error, inténtalo  más tarde')
          });
      };
    return (
      <div className="property-details-area">
        <div className="bg-gray pd-top-100 pd-bottom-90">
          <div className="container">
            <div className="row ">
              <div className="col-xl-9 col-lg-8">
                <div className="property-details-slider">
                  <div className="item">
                    <div
                      id="carouselExampleControls"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <div class="carousel-item active">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/1.jpg"}
                          alt="First slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/2.jpg"}
                          alt="Second slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/3.jpg"}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/4.jpg"}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/5.jpg"}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/6.jpg"}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/7.jpg"}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/8.jpg"}
                          alt="Third slide"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={publicUrl + "assets/img/Terreno en maihue/9.jpg"}
                          alt="Third slide"
                        />
                      
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Anterior</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Siguiente</span>
                    </a>
                  </div>
                </div>

                <div className="property-details-slider-info">
                  <h3>
                    <span>Vendida</span> Terreno en Maihue
                  </h3>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="widget widget-owner-info mt-lg-0 mt-5">
                  <div className="owner-info text-center">
                   
                    <div className="details">
                      <h6>Nicolás Quintana</h6>
                      <span className="designation">
                        Vendedor de la propiedad
                      </span>
                      <form className="contact-form-wrap contact-form-bg" ref={form} onSubmit={sendEmail}>
                <h4>Contáctanos</h4>
                <div className="rld-single-input">
                  <input type="text" placeholder="Nombre" name="user_name" />
                </div>
                <div className="rld-single-input">
                  <input type="email" placeholder="Correo electrónico" name="user_email"/>
                </div>
                <div className="rld-single-input">
                  <textarea rows={10} placeholder="Mensaje" name="message" defaultValue={""} />
                </div>
                <div className="btn-wrap text-center">
                  <button className="btn btn-success" value="Send" type="submit">Enviar</button>
                </div>
              </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pd-top-90">
            <div className="col-lg-9">
              <div className="property-info mb-5">
                <div className="row">
                  <div className="col-md-3 col-sm-6"></div>
                  <div className="col-md-3 col-sm-6"></div>
                  <div className="col-md-3 col-sm-6">
                    <div className="single-property-info">
                      <h5>Descripción</h5>
                      <p>
                        <img
                          src={publicUrl + "assets/img/icons/7.png"}
                          alt={imagealt}
                        />
                        Se vende hermosa parcela de 5000 m2 en condominio con playa y vista a 5 volcanes en lago Calafquén
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6"></div>
                </div>
              </div>

              <div className="property-news-single-card style-two border-bottom-yellow"></div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default PropertyDetails;
