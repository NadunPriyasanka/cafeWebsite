import React, { useRef } from 'react'
import './menu.css';
import { rice } from '../../Data';
import { kottu } from '../../Data';
import { deserts } from '../../Data';
import { milk_shake } from '../../Data';
import Footer from '../Footer/Footer';


const Menu = () => {
  return (
  <section className="menu section" id="menu">
    <h1 className="section_title" data-title='Our Menu'>
        Rice
    </h1><br></br>
    <div className="menu__grid container grid">
        {rice.map(({img, title, description, price}, index) =>
        {
            return(
                <div className="menu__item grid" key={index}>
                    <div className="menu__img-wrapper">
                        <img src={img} alt="img" className='menu__img' />
                    </div>

                    <div className="menu__data">
                        <div>
                            <h3 className="menu__title">{title}</h3>
                            <p className="menu__description">{description}</p>

                    </div>
                    <span className="menu__price">{price}</span>
                </div>
                </div>
            )
        })}
        </div> 

<br/>

<h1 className="section_title" >
        Kottu
    </h1><br/>
    <div className="menu__grid container grid">
        {kottu.map(({img, title, description, price}, index) =>
        {
            return(
                <div className="menu__item grid" key={index}>
                    <div className="menu__img-wrapper">
                        <img src={img} alt="img" className='menu__img' />
                    </div>

                    <div className="menu__data">
                        <div>
                            <h3 className="menu__title">{title}</h3>
                            <p className="menu__description">{description}</p>

                    </div>
                    <span className="menu__price">{price}</span>
                </div>
                </div>
            )
        })}
        </div> 
   <br/>
        <h1 className="section_title" >
        Deserts
    </h1><br/>
    <div className="menu__grid container grid">
        {deserts.map(({img, title, description, price}, index) =>
        {
            return(
                <div className="menu__item grid" key={index}>
                    <div className="menu__img-wrapper">
                        <img src={img} alt="img" className='menu__img' />
                    </div>

                    <div className="menu__data">
                        <div>
                            <h3 className="menu__title">{title}</h3>
                            <p className="menu__description">{description}</p>

                    </div>
                    <span className="menu__price">{price}</span>
                </div>
                </div>
            )
        })}
        </div> 
<br/>

<h1 className="section_title" >
        Milk Shakes
    </h1><br/>
    <div className="menu__grid container grid">
        {milk_shake.map(({img, title, description, price}, index) =>
        {
            return(
                <div className="menu__item grid" key={index}>
                    <div className="menu__img-wrapper">
                        <img src={img} alt="img" className='menu__img' />
                    </div>

                    <div className="menu__data">
                        <div>
                            <h3 className="menu__title">{title}</h3>
                            <p className="menu__description">{description}</p>

                    </div>
                    <span className="menu__price">{price}</span>
                </div>
                </div>
            )
        })}
        </div> 







<Footer/>
  </section>
  );
};

export default Menu
