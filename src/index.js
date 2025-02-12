import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Nav from './components/Nav';
import NotFound from './pages/Notfound';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Reservations from './pages/Reservations';
import Footer from './components/Footer';
import TeamMember from './pages/TeamMember';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import Users from './components/Users';
import Servicesdash from './components/Servicesdash';
import SchedulePage from './components/Rendezvous';
import Signup from './pages/signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' Component={App}></Route>
    <Route path='/services' Component={Services}></Route>
    <Route path='/contact' Component={Contact}></Route>
    <Route path='/about' Component={About}></Route>
    <Route path='/team' Component={Team}></Route>
    <Route path='/team/:id' Component={TeamMember}></Route>
    <Route path='/reservations' Component={Reservations}></Route>
    <Route path='*' Component={NotFound}></Route>
    <Route path='/dashboard' element={<Dashboard />}/>
    <Route path='/login' Component={Login}/>
    <Route path='/signup' Component={Signup}/>

    <Route path="/dashboard" element={<Dashboard />}>
      {/* <Route index element=<h2>Welcome to Dashboard</h2> /> */}
    <Route path="users" element={<Users />} />
    <Route path="servicesdash" element={<Servicesdash />} />
    <Route path="rendezvous" element={<SchedulePage />} />
    </Route>


  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
