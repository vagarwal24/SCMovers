import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import Slideshow from "./Slideshow";

export default function Home(props) {
  return (
    <>
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-md-12">
            <Slideshow></Slideshow>

          </div>

        </div>
      </div>

      <div className="container">
        <br />

        <div className="row">
          <div className="col-md-4">

            <img src="/images/our-strategy.jpg" className="rounded" width="95%" height="55%" /><br />
            <br />
            <h4>Our Strategy</h4>
            <p>To primarily focus on transport and to work world pan in partnership with our customers to meet their requirements by creating innovative, reliable and cost-efficient solutions on time and on budget</p>
          </div>

          <div className="col-md-4">
            <img src="/images/mission-vision.jpg" className="rounded" width="95%" height="55%" style={{ 'opacity': '0.8', 'transition': 'all 0.3s' }} /><br />
            <br />
            <h4>Mission & Vision</h4>
            <p>By working with passion and focus on safety and sustainability to create competitive advantages for our customers, and in doing so always live up to our company values .</p>
          </div>
          <div className="col-md-4">
            <img src="/images/our-goal.jpg" className="rounded" width="95%" height="55%" /><br />
            <br />
            <h4>Our Goals</h4>
            <p>Our goals must be centered around the need to meet customer expectations. Customer needs include loading and moving cargo as rapidly and safely as possible, as well as delivering cargo exactly when expected and in the same condition as the items were when loaded on the truck.</p><br />
          </div>
          <br />
        </div>
        <br />
      </div>
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-md-12" style={{ 'background-color': 'lightblue', 'padding-top': "10%" }}>
            <h1><center>Why To Choose Us</center></h1>
            <h2 style={{ 'font-size': '20px' }}><center>THINKING THE WAY FORWARD</center></h2><hr style={{ 'text-decoration-line': 'underline', 'background-color': '#EC008C', 'width': '270px', 'margin-left': '40%' }} />

            <br />
            <p style={{ 'padding-left': '0' }}>We have a fleet of 125+ trailers (of different sizes), trucks, forklifts, cars and jeeps to take satisfactory care of your goods, so that they reach their destination on time and safely.</p>
            <div className="row">
              <div className="col-md-12">
                <table className="table" style={{ 'font-size': '28px' }}>
                  <tr>
                    <th><i class="fa fa-inr" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px', 'text-size': '40px' }}></i>Safe and cost-efficient</th>
                    <th><i class="fa fa-truck" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>On-time cargo movement</th>
                    <th><i class="fa fa-sitemap" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>Any size or weight cargo</th>
                  </tr><br />
                  <tr>
                    <th><i class="fa fa-users" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>Efficient team</th>
                    <th><i class="fa fa-home" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>Maintenance workshops 24*7</th>
                    <th><i class="fa fa-handshake-o" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>Old and trusted</th>
                  </tr><br />
                  <tr>
                    <th><i class="fa fa-check" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>Easy accessibility</th>
                    <th><i class="fa fa-shirtsinbulk" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>Professional Management</th>
                    <th><i class="fa-solid fa-truck" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>Plying Own Fleet</th>
                  </tr><br />
                  <tr>
                    <th></th>
                    <th><i class="fa fa-truck" aria-hidden="true" style={{ 'color': 'red', 'font-size': '50px' }}></i>Wide Branch Network</th>
                    <th></th>
                  </tr><br />
                </table><br />
                <br />
              </div>
            </div>



          </div>




        </div>
        <div className="container-card">

          <div className="row top">
            <div className="col-md-12" style={{ 'backgroundImage': 'url("/images/request-quote-bg.jpg")', }}>
              <div className="card" style={{ 'padding-top': '7%', 'margin-left': '35%', 'margin-right': '25%', 'background-color': 'black', 'opacity': '0.7' }}>
                <h1 style={{ 'margin-left': '5%', 'color': 'white' }}>REQUEST A QUOTE</h1><hr style={{ 'margin-right': '28%', 'margin-left': '5%', 'color': 'red', 'thick': 'bold' }} />
                <form style={{ 'margin-right': '10%', 'margin-left': '5%' }}>
                  <div className="mb-3 mt-3">
                    <label for="name" className="form-label"></label>
                    <input type="text" className="form-control" id="email" placeholder="Your Name*" name="text" />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label"></label>
                    <input type="email" className="form-control" id="text" placeholder="Your E-mail Address*" name="email" />
                  </div>
                  <div className="mb-3">
                    <label for="Location" className="form-label"></label>
                    <input type="text" className="form-control" id="text" placeholder="Your Location*" name="text" />
                  </div>
                  <div className="mb-3">
                    <label for="destination" className="form-label"></label>
                    <input type="destination" className="form-control" id="pwd" placeholder="To Destination*" name="text" />
                  </div>
                  <div className="mb-3">
                    <label for="contact" className="form-label"></label>
                    <input type="contact" className="form-control" id="number" placeholder="Contact Number*" name="number" />
                  </div>
                  <div className="mb-3">
                    <label for="cargo" className="form-label"></label>
                    <input type="Cargo" className="form-control" id="text" placeholder="Cargo/Person*" name="text" />
                  </div><br />
                  <div className="form-check mb-3">
                    <div className="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>

                  </div><br />
                  <button type="submit" className="btn btn-primary" style={{ 'width': '100%', 'height': '15%', 'padding-top': '2%' }}>Submit</button>
                </form>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ 'padding-bottom': '10%' }}>
          <br />
          <div className="row">
            <h3 style={{ 'padding-left': '45%', 'padding-top': '5%' }}>OUR CUSTOMERS</h3><br />
            <div className="col-md-12">
              <table className="table">
                <tr>
                  <th><img src="/images/krishna.jpeg" className="rounded" /></th>
                  <th><img src="/images/shriram.jpeg" className="rounded" /></th>
                  <th><img src="/images/dcm.png" className="rounded" /></th>
                  <th><img src="/images/swastik.jpeg" className="rounded" /></th>
                </tr>
              </table>
            </div>
          </div>
        </div>


      </div>

    </>

  )
}