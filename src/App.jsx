import { useState } from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './App.css';
import './index.css';import Nav from './Comps/Nav/Nav'
import Home from './Comps/Home/Home';

import About from './Comps/About/About';
import Book from './Comps/Book/Book';
import Features from './Comps/Features/Features';
import Menu from './Comps/Menu/Menu';
import Gallery from './Comps/Gallery/Gallery';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>




      <div>        
        <Nav/>

        <BrowserRouter> 

        <Routes>
        <Route path="/cafeWebsite" element={<Home/>}/>       
        </Routes>

        <Routes>
        <Route path='/cafeWebsite/Menu/' element={<Menu/>}/>
        </Routes>
        
        <Routes>
        <Route path='/cafeWebsite/Gallery' element={<Gallery/>}/>
        </Routes>

        

        <Routes>
        <Route path='/cafeWebsite/features' element={<Features/>}/>
        </Routes>

        <Routes>
        <Route path='/cafeWebsite/Book a Table' element={<Book a Table/>}/>
        </Routes>

        <Routes>
        <Route path='/cafeWebsite/About' element={<About/>}/>
        </Routes>

        </BrowserRouter>

        </div> 
      
    </>
  )
}

export default App
