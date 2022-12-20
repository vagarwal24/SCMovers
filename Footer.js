import React from 'react'

export default function Footer() {
    return (
        <>

            <footer className="bg-dark text-light py-2">


                <ul className="list-inline">
                    <li className="list-inline-item" style={{ 'padding-left': '20px' }}><a className="nav-link active" aria-current="page" href="/" style={{ 'color': 'white' }}>Home</a></li>
                    <li className="list-inline-item" style={{ 'padding-left': '30px' }}><a className="nav-link active" aria-current="page" href="/about" style={{ 'color': 'white' }}>About Us</a></li>
                    <li className="list-inline-item" style={{ 'padding-left': '30px' }}><a className="nav-link active" aria-current="page" href="/contact" style={{ 'color': 'white' }}>Contact Us</a></li>
                    <i className="fa fa-whatsapp" aria-hidden="true" style={{ 'padding-left': '30%' }}></i>
                    <i className="fa fa-facebook" aria-hidden="true" style={{ 'padding-left': '40px' }}></i>
                    <i className="fa fa-instagram" aria-hidden="true" style={{ 'padding-left': '40px' }}></i>
                    <li className="list-inline-item" style={{ 'padding-left': '180px' }}>Web-enabled by Vikas Agarwal</li>
                </ul>






            </footer>
        </>
    )
}