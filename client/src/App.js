import React from 'react';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Categories from './components/Categories';
import Joke from './components/Joke';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
      <Router>
        <div className='container-md'>
            <h1 className='text-center mt-3'>Chuck Norris</h1>
            <h3 className='text-center'>Jokes discovered Chuck</h3>
            <Route exact path='/' component={Categories}/>
            <Route exact path='/random/:category' component={Joke}/>
        </div>
      </Router>
  );
}

export default App;
