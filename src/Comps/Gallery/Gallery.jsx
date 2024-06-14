import React, { useRef } from 'react'
import { gallery } from '../../Data';
import './gallery.css';
import Footer from '../Footer/Footer';

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <h2 className="section__title"data-title='Gallery' >
        Our Photo Gallery
      </h2>

      <div className="gallery__grid container grid" >
        {gallery.map(({img,title},index) =>{
          return(
                  <div className="gallery__item" key={index}>
                  <img src={img} alt="" className='gallery__img' />
                  <h3 className="gallery__title">{title}</h3>
                  

                  

                  </div>
          )
        })

        }

      </div>


<Footer/>
      </section>
  )
}

export default Gallery
