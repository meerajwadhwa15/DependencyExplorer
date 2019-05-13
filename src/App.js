import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchLayout from './components/templates/Default';
import DependencyLayout from './components/templates/Dependency';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={SearchLayout} />
        <Route path="/dependency/:searchString" component={DependencyLayout} />
      </div>
    </Router>
  );
}

export default App;
