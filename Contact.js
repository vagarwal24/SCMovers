import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import HeadOffice from "./HeadOffice";
export default function About(props) {
	return (
		<>
			<div className="container-fluid" style={{ 'padding-bottom': '10%' }}>
				<br />
				<div className="row">
					<div className="col-md-12">
						<HeadOffice></HeadOffice>

					</div>

				</div>
			</div>

		</>
	)
}	