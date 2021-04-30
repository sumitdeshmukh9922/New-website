import React from "react"
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"

const Footer = () => (

    <footer className="bg-dark text-center text-white">
  
  <div className="container p-3 pb-0">
    
    <section className="mb-0">
      
      <a className="btn btn-outline-light btn-floating m-2" href="#!" role="button">
        <i className="fab fa-facebook-f"></i>
        <FaFacebook />
      </a>
      
      <a className="btn btn-outline-light btn-floating m-2" href="#!" role="button">
        <FaTwitter />
      </a>

      
      <a className="btn btn-outline-light btn-floating m-2" href="#!" role="button">
        <i className="fab fa-google"></i>
        <FaGoogle />
      </a>

      
      <a className="btn btn-outline-light btn-floating m-2" href="#!" role="button"
        ><i className="fab fa-instagram"></i>
        <FaInstagram />
      </a>

      
      <a className="btn btn-outline-light btn-floating m-2" href="#!" role="button">
        <i className="fab fa-linkedin-in"></i>
        <FaLinkedin />
      </a>

      <a className="btn btn-outline-light btn-floating m-2" href="#!" role="button">
        <i className="fab fa-github"></i>
        <FaGithub />
      </a>
    </section>
    
  </div>

  <div className="text-center p-4">
    © 2020 Copyright:
    <a className="text-white" href="#">Something.com</a>
  </div>
  
</footer>

)

export default Footer;




