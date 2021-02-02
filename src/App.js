import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <img className='hero-img' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg' alt="img of men's accessories" />
      <header className='header'>
        <img className='logo' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='start-bootstrap logo' />
        <nav className='menu'>
          <p className='menu-selection'>SERVICES</p>
          <p className='menu-selection'>PORTFOLIO</p>
          <p className='menu-selection'>ABOUT</p>
          <p className='menu-selection'>TEAM</p>
          <p className='menu-selection'>CONTACT</p>
        </nav>
        <button
          onClick={toggleMenu}
          className='mobile-menu-btn'>
          <p className='mobile-menu-txt'>MENU</p>
          <img className='mobile-menu-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/768px-Hamburger_icon_white.svg.png' alt='menu icon' />
        </button>
        <div className={`mobile-menu ${isMenuOpen ? null : 'mobile-menu-hide'}`}>
          <p className='mobile-view-menu'>SERVICES</p>
          <p className='mobile-view-menu'>PORTFOLIO</p>
          <p className='mobile-view-menu'>ABOUT</p>
          <p className='mobile-view-menu'>TEAM</p>
          <p className='mobile-view-menu'>CONTACT</p>
        </div>
      </header>
      <body className='body'>
        <h2 className='welcome-message'>Welcome To Our Studio!</h2>
        <h2 className='greeting-message'>IT'S NICE TO MEET YOU</h2>
        <button className='yellow-btn'>TELL ME MORE</button>
      </body>
    </div>
  );
}

export default App;