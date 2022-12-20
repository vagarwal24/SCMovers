import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  {
    url: '/images/truck.jpg',

  },
  {
    url: '/images/truck1.jpg',

  },

];

export default function Slideshow() {
  return (
    <>

      <div id="demo" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>

        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">

            <div style={{ 'backgroundImage': 'url("/images/truck.jpg")', 'height': '50vw', 'width': '100%', 'background-position': '50% 0', 'background-size': 'cover' }}>
              <div style={{ 'backgroundImage': 'url("/images/overlay-black.png")', 'height': '50vw', 'width': '100%', 'background-repeat': 'no-repeat', 'background-position': '0 top' }}>
                <h2 style={{ 'padding-top': '20%', 'padding-left': '15%', 'color': 'white' }}>We Deliver</h2>
                <h1 style={{ 'color': 'white', 'padding-left': '10%', 'thick': 'bold' }}>CARGO PROMOPTLY & SAFELY</h1>
                <h6 style={{ 'padding-left': '15%', 'color': 'white', 'thick': 'bold' }}>Dedicated Line between Delhi-Kota-Gujarat</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ 'backgroundImage': 'url("/images/truck1.jpg")', 'height': '50vw', 'width': '100%', 'background-position': '50% 0', 'background-size': 'cover' }}>
              <div style={{ 'backgroundImage': 'url("/images/overlay-black.png")', 'height': '50vw', 'width': '100%', 'background-repeat': 'no-repeat', 'background-position': '0 top' }}>
                <h2 style={{ 'padding-top': '20%', 'padding-left': '15%', 'color': 'white' }}>We Deliver</h2>
                <h1 style={{ 'color': 'white', 'padding-left': '10%', 'thick': 'bold' }}>CARGO PROMOPTLY & SAFELY</h1>
                <h6 style={{ 'padding-left': '15%', 'color': 'white', 'thick': 'bold' }}>Dedicated Line between Delhi-Kota-Gujarat</h6>
              </div>
            </div>
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>


    </>
  )
}