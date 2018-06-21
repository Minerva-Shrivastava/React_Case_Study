import React, { Component } from 'react';

import '../css/header.css';

class Header extends Component {
  render() {
    return (
        <header className="header">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                      <h1 className="display-4" style={{textAlign:'center'}}>Calculator</h1>
                    <p className="lead"></p>
                    </div>
                </div>
        </header>
    );
  }
}

export default Header;