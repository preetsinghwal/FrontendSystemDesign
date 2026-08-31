import About from './About.js';
import './App.css';
import Body from './Body.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Team } from './Team.js';
import Login from './Login.js';
import ProtectedRoute from './ProtectedRoute.js';
import { useState } from 'react';
import Accordian from './Accordian.js';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <div className="App">
      <header className='header'>
        <div className='logo-wrapper'>System Design</div>
        <div className='nav-wrapper'>
          <nav className='nav-links'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/team'>Team</a>
            <a href='/login'>Login</a>
            <a href='/accordian'>Accordian</a>
          </nav>

          <select value={lang} onChange={(e)=> setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/about' element={<About lang={lang}/>}></Route>
          </Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/accordian' element={<Accordian />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
