import React from 'react'
import './App.css';
import Books from './component/Books'
import BookDetails from './component/BookDetails'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <h1>React Assessment</h1>
        <Router>
        <Route path='/books' exact component={Books}/>
        <Route path='/book-details/:idThatWeExpect' component={BookDetails}/>
        </Router>
        
    </div>
  );

}

export default App;
