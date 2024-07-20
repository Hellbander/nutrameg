import React from 'react';
import Header from './components/header/header';
import Goals from './components/goals/goals';
import Disclaimer from './components/disclaimer/disclaimer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <body className='app-body'>
        <Goals />
        <Disclaimer />
      </body>
    </div>
  );
}

export default App;
