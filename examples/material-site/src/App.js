import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Router>
          <Route path="/" exact component={Home} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Router>
      </>
    );
  }
}

export default App;
