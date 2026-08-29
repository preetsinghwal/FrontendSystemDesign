import About from './About.js';
import './App.css';
import Body from './Body.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Team } from './Team.js';
import Login from './Login.js';
import ProtectedRoute from './ProtectedRoute.js';

function App() {
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
          </nav>
        </div>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path='/about' element={<About />}></Route>
          </Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
