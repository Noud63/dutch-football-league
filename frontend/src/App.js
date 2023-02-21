import React from 'react'
import Stand from './Stand'
import Header from './Header'
import Home from './Home'
import Uitslagen from './Uitslagen'
import Recent from './Recent'
import Footer from './Footer'
import History from './History'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/uitslagen' element={<Uitslagen/>} />
          <Route path='/recent'element={<Recent/>} />
          <Route path='/stand' element={<Stand/>} />
          <Route path='/history' element={<History/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
