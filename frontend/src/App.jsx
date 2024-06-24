import { useState } from 'react'


import Header from './сomponents/Header/Header';
import Footer from './сomponents/Footer/Footer';
import Home from './pages/Home/Home';


function App() {

  return (
    <>
    <Header/>
    <div className="app">
      <Home/>
    </div>
    <Footer/>
    </>
  )
}

export default App