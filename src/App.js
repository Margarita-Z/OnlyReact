import React from 'react';
//pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPages from './pages/SignupPages';
import Dashboard from './pages/Dashboard';
//styled commponents
import { StyledContainer } from './components/Styles';

import { Routes, Route } from 'react-router-dom';

//auyh & redux
import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import {connect} from 'react-redux';
//import { Route, Routes } from 'react-router-dom';
//import Header from './components/partials/Header';
//import Home from './components/Home';
//import Login from './components/Login';
//import Register from './components/Register';

function App() {
  return (
    <div className="App">
       <StyledContainer>
      <Routes>
       
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignupPages />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={<Dashboard />} />


          {/*<Header />

    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    </Routes>
    */}

       
      </Routes>
      </StyledContainer>
    </div>
  );
}
const mapStateToProps = ({session}) => ({
  checked: session.checked
})

export default connect() (App);
