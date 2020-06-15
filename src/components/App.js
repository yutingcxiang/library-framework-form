import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css';
import Form from "./Form";
import Review from "./Review";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/new-review" component={Form}/>
        <Route path="/view-review" component={Review}/>
        <Route path="/search-review" component={Search}/>
      </Router>
    </div>
  );
}

export default App;
