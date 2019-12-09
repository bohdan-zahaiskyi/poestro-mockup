import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import MainPageComponent from './components/main-page/main-page.component';
import MenuComponent from './components/menu/menu.component';
import AnalyzeComponent from './components/analyze/analyze.comoponent';
import GenerateComponent from './components/generate/generate.component';
import { Layout } from './Layout';

class App extends Component {
  render() {
    console.log("Props from app: ", this.props)
    return (
      <BrowserRouter>
        <Layout>
            <Route exact path='/' component={MainPageComponent}></Route>
            <Route path='/menu' component={MenuComponent}></Route>
            <Route path='/analyze' component={AnalyzeComponent}></Route>
            <Route path='/generate' component={GenerateComponent}></Route>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
