import React from 'react';
import {Header} from './layout/header';
import {Footer} from './layout/footer';
import {Main} from './layout/main';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  )
}

export default App;
