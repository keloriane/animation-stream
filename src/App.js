import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import About from './components/About/About';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Cursor />
    </div>
  );
}

export default App;
