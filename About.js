import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import OurProfile from "./OurProfile";
import Services from "./Services";
export default function About(props) {
	return (
		<>


			<div className="container-fluid" style={{ 'padding-bottom': '10%' }}>
				<br />
				<div className="row">
					<div className="col-md-12">
						<OurProfile></OurProfile>

					</div>

				</div>
			</div>


		</>
	)
}	