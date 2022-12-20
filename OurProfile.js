import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function OurProfile(props) {
  return (
    <>
      <div className="container-fluid">
        <div style={{ 'backgroundImage': 'url("/images/meeting1.jpeg")', 'height': '374px', 'width': '100%', 'background-position': '50% 0', 'background-size': 'cover' }}>
          <div style={{ 'backgroundImage': 'url("/images/overlay-black.png")', 'height': '374px', 'width': '100%', 'background-repeat': 'no-repeat', 'background-position': '0 top' }}>
            <div className="row">
              <div className="col-md-12">
                <br />
                <h1 style={{ 'font-size': '60px', 'font-weight': '700', 'color': ' #ffffff', 'text-transform': ' uppercase', 'padding': ' 0px', 'margin': ' 0px', 'padding-top': '40px', 'padding-left': '80px', 'padding-bottom': '90px' }}>ABOUT US</h1>
              </div>
            </div>
            <br />
            <div className="bread-crumb" style={{ 'backgroundImage': 'url("/images/bg.png")', 'background-repeat': 'no-repeat', 'background-position': '0 center', 'padding-top': '30px', 'padding-bottom': '30px' }}>
              <div className="row" style={{ 'margin-left': '15px', 'margin-right': '15px' }}>
                <div className="col-lg-12" style={{ 'width': '100', 'padding-left': '100px' }}>
                  <ol className="breadcrumb" style={{ 'padding-bottom': '12px', 'padding-top': '12px', 'padding-left': '0px', 'padding-right': '0px' }}>
                    <li style={{ 'box-sizing': 'border-box' }}>
                      <a className="nav-link active" href="/" style={{ 'color': 'white' }}>&nbsp;Home</a></li>
                    <li className="active" style={{ 'padding': '0 10px', 'color': 'white', 'padding-top': '10px' }}><i class="fa fa-chevron-right" aria-hidden="true">&nbsp;About Us</i></li>

                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid" style={{ 'padding-bottom': '10%', 'padding-top': '5%' }}>
        <h2 style={{ 'margin-left': '7%' }}>A Few Word About us</h2><hr style={{ 'margin-left': '7%', 'width': '25%', 'color': 'red', 'font-weight': 'bold' }} />
        <br />
        <p style={{ 'margin-left': '7%' }}>Suraj Cargo Movers Transport (SCMT) are specialists in container management, operating in tandem with Velji Dosabhai & Sons Pvt. Ltd who are one of India's leading Clearing, Forwarding & Shipping Agents. We undertake to transport your goods between Mumbai and Gujarat</p><br />
        <p style={{ 'margin-left': '7%' }}>Suraj Cargo Movers Transport (SCMT) was established in 1982 under the able leadership of Mr. Natwarlal Devchand Popat, the visionary who envisaged the future of the logistics business when it was just in its nascent stage. The company was further incorporated into a Pvt. Ltd. Company in the year 1997.</p><br />
        <p style={{ 'margin-left': '7%' }}>Suraj Cargo Movers Transport (SCMT) is headquartered in Rajkot and has branch offices in Mumbai, Gandhidham, Baroda and Pipavav. Started off with a single tempo in 1982, the company today owns over 125+ trucks, trailers, forklifts and provides complete door to door logistics to the EXIM community in Maharashtra and Gujarat.</p><br />
        <p style={{ 'margin-left': '7%' }}>SCMT is well known in the industry as a dedicated, timely and qualitative service provider. Nevertheless, the Company continually strives to broaden and expand their operations and services to all aspects of Transport. Equipped with over two decades of experience in the trade, the company constantly aims to achieve their goal of rendering efficient and professional service to all their customers at all times.</p><br />
        <p style={{ 'margin-left': '7%' }}>SCMT's customers include corporate giants like Aditya Birla Group, Wockhardt Ltd., H & R Johnson, Parag Milk and Milk Products Pvt. Ltd., British Scaffolding, Echjay Industries Pvt. Ltd., Ratnamani Metal tubes Ltd., Chandan Steel and many more. The company has a diverse cargo portfolio and is experienced to carry sensitive and hazardous cargoes like Hydrochloric Acid to heavy engineering goods.</p><br />
        <p style={{ 'margin-left': '7%' }}>SCMT's customers include corporate giants like Aditya Birla Group, Wockhardt Ltd., H & R Johnson, Parag Milk and Milk Products Pvt. Ltd., British Scaffolding, Echjay Industries Pvt. Ltd., Ratnamani Metal tubes Ltd., Chandan Steel and many more. The company has a diverse cargo portfolio and is experienced to carry sensitive and hazardous cargoes like Hydrochloric Acid to heavy engineering goods.</p><br />
        <p style={{ 'margin-left': '7%' }}>The company has always been in the forefront of using the latest technologies available to enhance the service levels. In the above context, SCMT has recently initiated a pilot project for the Global Positioning System (GPS) that enables the operations office to track the vehicle in real time and update the customers accordingly.</p><br />


      </div>
    </>
  )
}