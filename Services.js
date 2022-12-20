import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function Services(props) {
	return (
		<>
			<div className="container-fluid">
				<div style={{ 'backgroundImage': 'url("/images/services.jpg")', 'height': '374px', 'width': '100%', 'background-position': '50% 0', 'background-size': 'cover' }}>
					<div style={{ 'backgroundImage': 'url("/images/overlay-black.png")', 'height': '374px', 'width': '100%', 'background-repeat': 'no-repeat', 'background-position': '0 top' }}>
						<div className="row">
							<div className="col-md-12">
								<br />
								<h1 style={{ 'font-size': '60px', 'font-weight': '700', 'color': ' #ffffff', 'text-transform': ' uppercase', 'padding': ' 0px', 'margin': ' 0px', 'padding-top': '40px', 'padding-left': '80px', 'padding-bottom': '90px' }}>Services</h1>
							</div>
						</div>
						<br />
						<div className="bread-crumb" style={{ 'backgroundImage': 'url("/images/bg.png")', 'background-repeat': 'no-repeat', 'background-position': '0 center', 'padding-top': '30px', 'padding-bottom': '30px' }}>
							<div className="row" style={{ 'margin-left': '15px', 'margin-right': '15px' }}>
								<div className="col-lg-12" style={{ 'width': '100', 'padding-left': '100px' }}>
									<ol className="breadcrumb" style={{ 'padding-bottom': '12px', 'padding-top': '12px', 'padding-left': '0px', 'padding-right': '0px' }}>
										<li style={{ 'box-sizing': 'border-box' }}>
											<a className="nav-link active" href="/" style={{ 'color': 'white' }}>&nbsp;Home</a></li>
										<li className="active" style={{ 'padding': '0 10px', 'color': 'white', 'padding-top': '10px' }}><i class="fa fa-chevron-right" aria-hidden="true">&nbsp;Services</i></li>

									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid" style={{ 'padding-bottom': '10%' }}>

				<h2 style={{ 'padding-left': '5%', 'padding-top': '50px' }}>Services Offered By Us</h2><hr style={{ 'margin-right': '69%', 'margin-left': '5%', 'color': 'red' }} />
				<br />
				<div className="row">
					<div className="col-md-12">
						<table>
							<tr>
								<th><i className="fa fa-square" aria-hidden="true" style={{ 'padding-left': '60px', 'color': '#FF69B4', 'font-size': '20px' }}></i></th>
								<th style={{ 'padding-left': '20px' }}>Clearing and Forwarding of Export Consignments</th>
							</tr>
							<br />
							<tr>
								<th><i className="fa fa-square" aria-hidden="true" style={{ 'padding-left': '60px', 'color': '#FF69B4', 'font-size': '20px' }}></i></th>
								<th style={{ 'padding-left': '20px' }}>LCL Consolidation</th>
							</tr>
							<br />
							<tr>
								<th><i className="fa fa-square" aria-hidden="true" style={{ 'padding-left': '60px', 'color': '#FF69B4', 'font-size': '20px' }}></i></th>
								<th style={{ 'padding-left': '20px' }}>Sea Freight / Air Freight</th>
							</tr>
							<br />
							<tr>
								<th><i className="fa fa-square" aria-hidden="true" style={{ 'padding-left': '60px', 'color': '#FF69B4', 'font-size': '20px' }}></i></th>
								<th style={{ 'padding-left': '20px' }}>House Stuffing Consignments Nationwide</th>
							</tr>
							<br />
							<tr>
								<th><i className="fa fa-square" aria-hidden="true" style={{ 'padding-left': '60px', 'color': '#FF69B4', 'font-size': '20px' }}></i></th>
								<th style={{ 'padding-left': '20px' }}>Door to door logistics</th>
							</tr>
							<br />
							<tr style={{ 'margin-bottom': '30px' }}>
								<th><i className="fa fa-square" aria-hidden="true" style={{ 'padding-left': '60px', 'color': '#FF69B4', 'font-size': '20px' }}></i></th>
								<th style={{ 'padding-left': '20px' }}>Assistance in Drawback Claims</th>
							</tr>
						</table>
					</div>
				</div>

			</div>
		</>
	)
}