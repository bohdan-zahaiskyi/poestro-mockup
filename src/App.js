import React from 'react';
import './App.css';
import MainPageComponent from './components/main-page/main-page.component';
import NavHeaderComponent from './components/nav-header/nav-header.component';
import LoginComponent from './components/login/login.component';

function App() {
  return (
    <div>
      <NavHeaderComponent />
      <MainPageComponent />
      <LoginComponent />
    </div>
  );
}

export default App;
