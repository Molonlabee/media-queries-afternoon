import React from 'react';
import Section from './components/Section';
import {HashRouter, Link} from 'react-router-dom';
import routes from './routes';
import './App.css';
import './App2.css';

class App extends React.Component {
  constructor() {
    super();

      this.state = {
        menuIsOpen: false
      }
  }

  render() {
    return(
      <div>
      <nav>

        <h3>Start Bootstrap</h3>
        <HashRouter>
        <ul>
        {/* <Link to='/Section'><button Section='btn'>Section</button></Link> */}
          <li>SERVICES</li>
          <li>PORTFOLIO</li>
          <li>ABOUT</li>
          <li>TEAM</li>
          <li>CONTACT</li>
        </ul>
          </HashRouter>
        <button className='ham'>
        <img 
        onClick={() => this.setState({menuIsOpen: !this.state.menuIsOpen})}
        width="25px" 
        src ="https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png"/>
        </button>
      </nav>
      <HashRouter>
      <menu className={this.state.menuIsOpen === true ? 'menu-open' : ''}>
      {/* <Link to='/Section'><button Section='btn'>Section</button></Link> */}
        <p>SERVICES</p>
        <p>PORTFOLIO</p>
        <p>ABOUT</p>
        <p>TEAM</p>
        <p>CONTACT</p>
      </menu>
      </HashRouter>
      <div className='btmNav'>
        <h2>Welcome To Our Studio!</h2>
        <h1>IT'S NICE TO MEET YOU</h1>
        <button>TELL ME MORE</button>
      </div>

      <div className='p2'>
        <Section />
      </div>
      </div>

 

    )
  }
}

export default App;

