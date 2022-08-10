import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import fondo from '../../volcanes.mp4'
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import "../../App.css"
export const DemoCarousel = () => {
  return (
   <div>
    <div className="overlay"></div>
    <video className="videito" src={fondo} autoPlay loop muted/>
    <div className="content">
      Vivir en el sur 
    </div>
  </div>
  );
};
