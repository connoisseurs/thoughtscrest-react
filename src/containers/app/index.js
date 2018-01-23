import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import '../../App.css'

const App = () => (
<div className="App">
<header className="App-header">
    <div className="App-menu">
        <span className="App-menu-item"><Link to="/">Home</Link></span>
        <span className="App-menu-item"><Link to="/about-us">About</Link></span>
    </div>
</header>

<main>
<Route exact path="/" component={Home} />
<Route exact path="/about-us" component={About} />
</main>
</div>
)

export default App;