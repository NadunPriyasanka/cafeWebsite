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

        <BrowserRouter > 

        <Routes>
        <Route path='/' element={<Home/>}/>       
        </Routes>

        <Routes>
        <Route path='/Menu' element={<Menu/>}/>
        </Routes>
        
        <Routes>
        <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>

        

        <Routes>
        <Route path='/features' element={<Features/>}/>
        </Routes>

        <Routes>
        <Route path='/Book a Table' element={<Book a Table/>}/>
        </Routes>

        <Routes>
        <Route path='/About' element={<About/>}/>
        </Routes>

        </BrowserRouter>

        </div> 
      
    </>
  )
}

export default App
