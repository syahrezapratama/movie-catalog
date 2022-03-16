import React from 'react';
// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
