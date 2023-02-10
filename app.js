import React, { Component } from 'react';
import NavigationComponent from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  render() {
    return (
      <>
        <NavigationComponent />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    );
  }
}

export default App;
