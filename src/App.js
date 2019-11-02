import React from 'react';

import "./styles.css";
import Header from './componentes/Header';
import Main from './pages/main';
import Footer from './componentes/Footer';

const App = () => (
  <div className= "App">
    <Header/>
    <Main/>
    <Footer/>
  </div>
);


export default App;
