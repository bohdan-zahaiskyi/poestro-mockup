import React, { Component } from 'react';
import NavHeaderComponent from './components/nav-header/nav-header.component';

export class Layout extends Component {
  constructor(props) {
    console.log("LAYOUT", props);
    super(props);
  }
  render() {
    return (
      <React.Fragment>
          <NavHeaderComponent {...this.props}/>
          <div className="main-page">{this.props.children}</div>
      </React.Fragment>
    );
  }
}
