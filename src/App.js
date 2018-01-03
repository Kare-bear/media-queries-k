import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className = 'App-box'>
        <div>
        <a className ='cursive'>Start Bootstrap</a>
        </div>
        <div>
            <ul className = 'list'>
                <li>
                    <a className="header-item">SERVICES</a>
                </li>
                <li>
                    <a className="header-item">PORTFOLIO</a>
                </li>
                <li>
                    <a className="header-item">ABOUT</a>
                </li>
                <li>
                    <a className="header-item">TEAM</a>
                </li>
                <li>
                    <a className="header-item">CONTACT</a>
                </li>
            </ul>
        </div>
    </div>
        </header>
        
      <img className = "background-pic" src = "https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg"/>

      <article className = "welcome"> Welcome To Our Studio! </article>
      <article className = "nice"> IT'S NICE TO MEET YOU </article>
      </div>
    );
  }
}

export default App;
