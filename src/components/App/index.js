/* Packages import */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
/* Locals import */
import Header from '../Header/index';
import Home from '../Home/index';

const App = () => {

  return (
    <div className='app'>
      <Header />
      <Routes>
        {/* General Route */}
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
