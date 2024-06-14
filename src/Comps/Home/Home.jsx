import React, { useRef } from 'react'
import './home.css';

function Home() {
  return (
    <section className="home" id='home'>
        <div className="home__container">
            <div className="home__content">
               <span className="subtitle">
                    Welcome to Hewen<span className='id1'>C</span>afe.
               </span>
               <h1 className="home__title">
                Discover Amazing Foods and get Energy
               </h1>
               <p className="home__description">
               Where culinary delights and cozy ambiance come together. Whether you're in the mood for a hearty meal, a sweet dessert, or a refreshing drink, we have something to satisfy every craving. Join us at Modern Cafe and experience the perfect blend of flavors and hospitality.
               </p>

               <div className="home__btns">
                <a href="/menu" className="btn">Check menu</a>
                <a href="/book a table" className="btn home_btn">Book a Table</a>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Home
