import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt='Logo' width="50px"/>
            <b>
          <center>
            &copy;{new Date().getFullYear()} BlogCity | All rights reserved |
            Terms Of Service | Privacy{" "}
          </center>
        </b>
        </footer>
    )
}

export default Footer;
