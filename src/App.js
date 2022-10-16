import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, useNavigate, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import NavbarMain from './ComponentsMain/NavbarMain';
function App() {
  return (
    <>
      <Router>

        {/* <Navbar/> */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/beri' element={<NavbarMain />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
