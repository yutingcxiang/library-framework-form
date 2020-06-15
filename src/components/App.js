import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css';
import Form from "./Form";
import Review from "./Review";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/new-review" component={Form}/>
        <Route path="/view-review" component={Review}/>
      </Router>
    </div>
  );
}

export default App;
