import React, { useRef } from 'react'
import './About.css';
import abg from '../../assets/about-img.jpg';
import {FiCheck} from 'react-icons/fi';
import Footer from '../Footer/Footer';

function About() {
  return (
   <section className="About section" id="about">
    <div className="about_grid container grid">
        <div className="about_img-wrapper">
            <img src={abg} alt="Us" className="about_img" />
        </div>
        <div className="about_content">
            <h2 className="section_title" data-title='About Us'>
            Welcome to Modern Cafe, your go-to spot for a delightful dining experience! At our cafe, we pride ourselves on offering 
            a diverse menu that caters to all tastes.</h2>
        <p className="about_description">
        Our mission is to provide you with a warm and welcoming atmosphere where you can relax and enjoy quality food and beverages. Whether you're here for a quick bite or a leisurely meal, we aim to make your experience memorable
        </p>

        <div className="about_details grid">
            <p className="about_details-description">
            <FiCheck className="about_d-icon"></FiCheck> 
            Enjoy a variety of hearty meals including rice, kottu, and noodles.
            </p>

            <p className="about_details-description">
            <FiCheck className="about_d-icon"></FiCheck> 
            Satisfy your cravings with our delicious rolls and egeroti.
            </p>

            <p className="about_details-description">
            <FiCheck className="about_d-icon"></FiCheck> 
            Indulge in our sweet treats like ice creams and fruit salads.
            </p>

            <p className="about_details-description">
            <FiCheck className="about_d-icon"></FiCheck> 
            Refresh yourself with our range of milkshakes and fruit juices.
            </p>

        </div>
        <a href="/Chefs" className="btn">
            Book a Table
        </a>
        </div>

    </div>
    <Footer/>
   </section> 
  )
}

export default About
