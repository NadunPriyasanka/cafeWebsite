import React, { useRef } from 'react'
import './features.css';
import { features } from '../../Data';
import shape from '../../assets/shape.png';
import Footer from '../Footer/Footer';

function Service() {
  return (
    <section className="features section" id="features">
      <h2 className="section__title"data-title='Features' >
        Our best features
      </h2>

      <div className="features__grid container grid">
        {features.map(({img,title,description},index) =>{
          return(
                  <div className="feature__item" key={index}>
                  <img src={img} alt="" className='feature__img' />

                  <h3 className="feature__title">{title}</h3>
                  <p className="feature__description">{description}</p>

                  <img src={shape} alt="" className='feature__shape' />

                  </div>
          )
        })

        }

      </div>
      <Footer/>
    </section>
  )
}

export default Service
