import { useState } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';


function App() {

  return (
    <>
    <Header/>
    <div className=".app">
      <Home/>
    </div>
    <Footer/>
    </>
  )
}

export default App
