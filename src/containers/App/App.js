import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Layout from '../../hoc/Layout/Layout';
import Main from '../Main/Main';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Main />
          </Layout>
        </div>
      </BrowserRouter>
    );    
  }
}

export default App;
