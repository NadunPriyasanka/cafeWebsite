import React, { useRef } from 'react'
import './footer.css';
import { FaRegEnvelope, FaCaretRight,FaFacebookF,
FaTwitter,FaLinkedinIn ,FaYoutube} from 'react-icons/fa';
import {AiOutlinePhone} from 'react-icons/ai';
import {MdOutlineLocationOn} from 'react-icons/md';



function Footer() {
  return (
    <footer className="footer">
       <div className="footer__grid container grid">
        <div className="footer__content">
          <p className="footer__description">
          Enjoy our delicious offerings with the convenience of doorstep delivery. Fresh, healthy meals delivered right to your door!

          </p>
          <ul className="footer__content">
            <li className="fcon-item">
              <AiOutlinePhone className='icon'/>077 436 88 95
            </li>

            <li className="fcon-item">
              <MdOutlineLocationOn className='icon'/>138/3 Ampara road , Monaragala
            </li>

            <li className="fcon-item">
              <FaRegEnvelope className='icon'/>hevenCafe@gmail.com
            </li>

          </ul>
        </div>

      <div className="footer__content">
        <h3 className="footer__title">
          Quick Links</h3>
          
          <ul className="footer__links">
              <li>
                <a href="/about" className="footer__link">
                  <FaCaretRight className='icon'/>About Us
                </a>
              </li>

              <li>
                <a href="/menu" className="footer__link">
                  <FaCaretRight className='icon'/>Menu
                </a>
              </li>

              <li>
                <a href="/features" className="footer__link">
                  <FaCaretRight className='icon'/>Fearutes
                </a>
              </li>

              <li>
                <a href="/gallery" className="footer__link">
                  <FaCaretRight className='icon'/>Our Gallery
                </a>
              </li>

              <li>
                <a href="/book a table" className="footer__link">
                  <FaCaretRight className='icon'/>Book a Table
                </a>
              </li>

              <li>
                <a href="/" className="footer__link">
                  <FaCaretRight className='icon'/>Home Page
                </a>
              </li>

          </ul>

        
      </div>


      <div className="footer__content">
        <h3 className="footer__title">Opanning Dates And Times</h3>

        <div className="footer__opening-hour">
          <ul className="opening__hour-list">

            <li className="opening__hour-item">
              <span>Monday:</span>
              <span>9AM - 11PM</span>
            </li>

            <li className="opening__hour-item">
              <span>Tuesday:</span>
              <span>9AM - 11PM</span>
            </li>

            <li className="opening__hour-item">
              <span>Wensday:</span>
              <span>9AM - 11PM</span>
            </li>

            <li className="opening__hour-item">
              <span>Thuersday:</span>
              <span>9AM - 11PM</span>
            </li>

            <li className="opening__hour-item">
              <span>Friday:</span>
              <span>9AM - 11PM</span>
            </li>

            <li className="opening__hour-item">
              <span>Saturday:</span>
              <span>9AM - 11PM</span>
            </li>

            <li className="opening__hour-item">
              <span>Sunday:</span>
              <span>Closed</span>
            </li>

          </ul>

        </div>

      </div>

      <div className="footer__content">
        <h3 className="footer__title">Email to us</h3>

        <p className="footer__description">
          Subscribe us to get Latest Updates
        </p>

        <form action="" className="sub__form">
          <input
            type="text"
            placeholder='Your mail Address'
            className='form__input sub__input'/>

            <button className="btn btn--flex sub__btn">Subscribe Now</button>
        </form>

        <div className="footer__social">
          <h3 className="footer__social-follow">Follow us On </h3>
            <div className="footer__social-links">

                <a href="" className="footer__social-link">
                  <FaFacebookF/>
                </a>
                <a href="" className="footer__social-link">
                  <FaLinkedinIn/>
                </a>
                <a href="" className="footer__social-link">
                  <FaTwitter/>
                </a>
                <a href="" className="footer__social-link">
                  <FaYoutube/>
                </a>
            </div>
          
        </div>






      </div>

        </div> 

        <p className="copy__text">
          &copy; Copyright 2024 <span>HewenCafe</span> All rights Reserved.
        </p>
    </footer>
  )
}

export default Footer
