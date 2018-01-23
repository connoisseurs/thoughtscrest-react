import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Products from './containers/products'
import Menu from './containers/menu'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React using npx!!</h1>
        </header> */}
        <Menu />
        <div className="App-menu">
          <span className="App-menu-item"><Link to="/">Home</Link></span>
          <span className="App-menu-item"><Link to="/about-us">About</Link></span>
          <span className="App-menu-item"><Link to="/products">Products</Link></span>
        </div>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/products" component={Products} />
        </main>
      </div>
    );
  }
}

export default App;
