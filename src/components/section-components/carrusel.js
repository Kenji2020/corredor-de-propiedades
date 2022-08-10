import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const DemoCarousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
      interval={2000}
      ride={false}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="/assets/img/banner/31.jpg"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block" style={{'marginBottom':'100px'}}>
            <h5 className="sub-title" style={{ color: "rgba(255,255,255)" }}>
              Encontrarás el lugar perfecto
            </h5>
            <h1 className="title" style={{ color: "white" }}>
              Para tu nuevo hogar
            </h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/assets/img/Lago galletue campo/3.jpg"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block" style={{'marginBottom':'100px'}}>
            <h5 className="sub-title" style={{ color: "rgba(255,255,255)" }}>
              Conocerás lugares hermosos
            </h5>
            <h1 className="title" style={{ color: "white" }}>
              Donde vivir tranquilamente
            </h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/assets/img/Parcelas lago maihue/2.jpg"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block" style={{'marginBottom':'100px'}}>
            <h5 className="sub-title" style={{ color: "rgba(255,255,255)" }}>
              Solo deja todo en nuestras manos
            </h5>
            <h1 className="title" style={{ color: "white" }}>
              Nosotros nos encargamos de todo
            </h1>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Siguiente</span>
      </a>
    </div>
  );
};
