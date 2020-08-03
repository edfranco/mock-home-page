import React from 'react';

import Nav from './Components/Nav/Nav';
import Routes from './config/Routes';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
