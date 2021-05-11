import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Seasons from './component/Seasons';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/seasons" exact>
          <Seasons />
        </Route>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
