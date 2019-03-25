import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={Home} />
        </Layout>
      </Router>
    );
  }
}

export default App;
