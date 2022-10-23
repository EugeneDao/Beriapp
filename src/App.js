import './App.css'
import React from 'react';
import Home from './LandingPage/pages/Home'
import NavbarMain from './LandingPage/ComponentsMain/NavbarMain'
import Services from './LandingPage/pages/Services'
import Products from './LandingPage/pages/Products'
import SignUp from './LandingPage/pages/SignUp'
import { BrowserRouter as Router, Switch, Route, useNavigate, Routes, Form } from 'react-router-dom';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
