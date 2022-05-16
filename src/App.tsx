import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header';
import Location from './pages/Location';
import Character from './pages/Character';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
