import React, { useRef } from 'react'
import {FaRegBookmark} from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';
import shapeThree from '../../assets/shape-3.png';
import './book.css';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <section className="resev container" id="resev">
      <h2 className="section__title" >
        Reseve a table for you
      </h2>
<br/>

    <form className="resev__form grid">

      <div className="form__input-div">
        <input
          type="text"
          placeholder='Your Name'
          className='form__input'
          />  

      </div>



      <div className="form__input-div">
        <input
          type="email"
          placeholder='Your email address'
          className='form__input'
          />  
      </div>

      <div className="form__input-div">
        <input
          type="text"
          placeholder='Your phone Number'
          className='form__input'
          />  

      </div>

      <div className="form__input-div">
        <input
          type="text"
          placeholder='Date ex: 2024/12/20'
          className='form__input'
          />  

      </div>


      <div className="form__input-div">
        <input
          type="text"
          placeholder='Time ex: 13.30'
          className='form__input'
          />  
      </div> 

      <div className="form__input-div">
        <input
          type="text"
          placeholder='Number of people'
          className='form__input'
          />
      </div>
      
      <div className="form__input-div form__input-textarea">
        <textarea
            placeholder='Your Massage'
            className='form__input'
          >
        </textarea>

      

      </div>
      <button className='btn btn--flex resev__btn'>
        <FaRegBookmark/> Reserve your table
      </button>
    </form>

    <img src={shapeTwo} alt="" className='shape__two' />
    <img src={shapeThree} alt="" className='shape__three' />
<Footer/>
      </section>
  )
}

export default Contact
