import React from 'react'
import Header from './pages/Layout/Header/Header'
import { Outlet } from 'react-router-dom';
import Footer from './pages/Layout/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default App
