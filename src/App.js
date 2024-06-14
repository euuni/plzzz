import React, { useState } from 'react';
import Login from './components/Login';
import Membership from './components/Membership';
import Ship from './components/Ship';

function App() {
  return (
    <div className="App">

      <Login />
      <Membership />
      <Ship />

    </div>
  );
}

export default App;