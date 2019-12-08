import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import MainPageComponent from './components/main-page/main-page.component';
import NavHeaderComponent from './components/nav-header/nav-header.component';
import LoginComponent from './components/login/login.component';
import MenuComponent from './components/menu/menu.component';
import AnalyzeComponent from './components/analyze/analyze.comoponent';
import GenerateComponent from './components/generate/generate.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavHeaderComponent />
          <div className="main-page">
            <Route exact path='/' component={MainPageComponent}></Route>
            <Route path='/menu' component={MenuComponent}></Route>
            <Route path='/analyze' component={AnalyzeComponent}></Route>
            <Route path='/generate' component={GenerateComponent}></Route>
            <LoginComponent />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
