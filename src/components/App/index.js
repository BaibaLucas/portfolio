/* Packages import */
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition} from "react-transition-group";
/* Locals import */
import Header from '../Header/index';
import Home from '../Home/index';
import Hexagrid from '../Hexagrid';
import Loader from '../Loader';

const App = () => {
  const location = useLocation();

  return (
    
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <div className='app'>
          <Header />
            <Routes location={location}>
              {/* General Route */}
              <Route path='/' element={<Home />} />
              <Route path='/hexagrid' element={<Hexagrid />} />
              <Route path='/loader'
              element={<Loader />} />
            </Routes>
        </div>
        </CSSTransition>
      </TransitionGroup>
  )
}

export default App;
