import './App.css'
import React from 'react';
import Home from './LandingPage/pages/Home'
import NavbarMain from './LandingPage/ComponentsMain/NavbarMain'
import Services from './LandingPage/pages/Services'
import Products from './LandingPage/pages/Products'
import SignUp from './LandingPage/pages/SignUp'
import AuthProvider from './LandingPage/authprovider';
import { BrowserRouter as Router, Switch, Route, useNavigate, Routes, Form } from 'react-router-dom';
import AppContainer from './Web App Components/AppContainer/AppContainer';

function App() {
  return (
    <div>
     
      <AuthProvider>
      <Router>

{/* <Navbar/> */}
<Routes>
  <Route path='/' exact element={<Home />} />
<<<<<<< HEAD
  <Route path='/beri' element={<NavbarMain />} />
  
=======
  <Route path='/beri' element={<AppContainer />} />
>>>>>>> 20df888ade5924f8ddf21c2c6e9bdc9f7cf8b493
  <Route path='/services' element={<Services />} />
  <Route path='/products' element={<Products />} />
  <Route path='/sign-up' element={<SignUp />} />
</Routes>
</Router>
      </AuthProvider>
    </div>
  );
}

export default App;
