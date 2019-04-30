import React from 'react';
import './App.css';
import MainPageComponent from './components/main-page/main-page.component';
import NavHeaderComponent from './components/nav-header/nav-header.component';

function App() {
  return (
    <div>
      <NavHeaderComponent />
      <MainPageComponent />
    </div>
  );
}

export default App;
