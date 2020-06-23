import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css';
import 'fontsource-roboto';
import Form from "./Form";
import Review from "./Review";
import Search from "./Search";
import ReviewsList from "./ReviewsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ReviewsList}/>
        <Route exact path="/search-review" component={Search}/>
        <Route exact path="/new-review" component={Form}/>
        <Route exact path="/view-review" component={Review}/>
      </Router>
    </div>
  );
}

export default App;
