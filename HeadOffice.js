import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function Services(props) {
	return (
		<>
			<div className="container-fluid">

				<div style={{ 'backgroundImage': 'url("/images/contact.jpg")', 'height': '374px', 'width': '100%', 'background-position': '50% 0', 'background-size': 'cover' }}>
					<div style={{ 'backgroundImage': 'url("/images/overlay-black.png")', 'height': '374px', 'width': '100%', 'background-repeat': 'no-repeat', 'background-position': '0 top' }}>
						<div className="row">
							<div className="col-md-12">
								<br />
								<h1 style={{ 'font-size': '60px', 'font-weight': '700', 'color': ' #ffffff', 'text-transform': ' uppercase', 'padding': ' 0px', 'margin': ' 0px', 'padding-top': '40px', 'padding-left': '80px', 'padding-bottom': '90px' }}>CONTACT US</h1>
							</div>
						</div>
						<br />
						<div className="bread-crumb" style={{ 'backgroundImage': 'url("/images/bg.png")', 'background-repeat': 'no-repeat', 'background-position': '0 center', 'padding-top': '30px', 'padding-bottom': '30px' }}>
							<div className="row" style={{ 'margin-left': '15px', 'margin-right': '15px' }}>
								<div className="col-lg-12" style={{ 'width': '100', 'padding-left': '100px' }}>
									<ol className="breadcrumb" style={{ 'padding-bottom': '12px', 'padding-top': '12px', 'padding-left': '0px', 'padding-right': '0px' }}>
										<li style={{ 'box-sizing': 'border-box' }}>
											<a className="nav-link active" href="/" style={{ 'color': 'white' }}>&nbsp;Home</a></li>
										<li className="active" style={{ 'padding': '0 10px', 'color': 'white', 'padding-top': '10px' }}><i class="fa fa-chevron-right" aria-hidden="true">&nbsp;Contact us</i></li>
										<li className="active" style={{ 'padding': '0 10px', 'color': 'white', 'padding-top': '10px' }}><i class="fa fa-chevron-right" aria-hidden="true">&nbsp;Head Office</i></li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>




			<h2 style={{ 'padding-top': '95px', 'padding-left': '8%' }}>Our Information</h2><hr style={{ 'margin-right': '70%', 'margin-left': '8%', 'color': 'red' }} />
			<div className="container-fluid" style={{ 'padding-bottom': '10%' }}>

				<div className="row">
					<div className="col-md-6">
						<table>
							<tr>
								<th><i class="fa fa-map-marker" aria-hidden="true" style={{ 'padding-left': '100px', 'color': 'red', 'font-size': '50px' }}></i></th>
								<th style={{ 'padding-left': '50px', 'font-size': '30px' }}>Head Office<br /><h6>Kota - 324005</h6></th>
							</tr>
							<br />

							<tr>
								<th><i class="fa fa-phone" aria-hidden="true" style={{ 'padding-left': '100px', 'color': 'red', 'font-size': '50px' }}></i></th>
								<th style={{ 'padding-left': '50px', 'font-size': '30px' }}>Phone Number<br /><h6>7014794470</h6></th>

							</tr>
							<br />
							<tr>
								<th><i class="fa fa-whatsapp" aria-hidden="true" style={{ 'padding-left': '100px', 'color': 'red', 'font-size': '50px' }}></i></th>
								<th style={{ 'padding-left': '50px', 'font-size': '30px' }}>Contact Us On WhatsApp<br /><h6>8824407014</h6></th>
							</tr>


						</table>

					</div>
					<div className="col-md-6">
						<h2>Send Us Message</h2><hr style={{ 'color': 'red', 'margin-right': '50%' }} />

						<form style={{ 'margin-right': '50px' }}>
							<div className="mb-3">
								<label for="name" className="form-label"></label>
								<input type="text" className="form-control" id="text" placeholder="Full Name*" name="text" />
							</div>
							<div className="mb-3">
								<label for="email" className="form-label"></label>
								<input type="email" className="form-control" id="text" placeholder="E-mail Address*" name="email" />
							</div>
							<div className="mb-3">
								<label for="Location" className="form-label"></label>
								<input type="text" className="form-control" id="text" placeholder="Mobile No.*" name="text" />
							</div>
							<div className="mb-3">
								<label for="destination" className="form-label"></label>
								<input type="destination" className="form-control" id="pwd" placeholder="Your Message*" name="text" />
							</div>

							<div className="form-check mb-3">
								<div className="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>

							</div>
							<button type="submit" className="btn btn-primary" >Submit</button>
						</form>
					</div>
				</div>

			</div>
		</>
	)
}