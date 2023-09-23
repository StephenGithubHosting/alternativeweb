import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Gabby from './pages/gabby/Gabby';
import Easteregg from './pages/easteregg/Easteregg';
import Home from './pages/home/Home';

function App() {
    return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/gabby' element={<Gabby />} />
          <Route path='/easteregg' element={<Easteregg />} />
    </Routes>
      
    </>
  )
}

export default App
