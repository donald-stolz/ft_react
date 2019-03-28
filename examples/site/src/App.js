import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </Router>
    );
  }
}

export default App;
