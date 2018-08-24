import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import WelcomeMessage from './WelcomeMessage';
import Home from './Home';
import WriteItem from './WriteItem';
import ImportItems from './ImportItems';
import ItemsList from './ItemsList';
import { NewsArticle } from './NewsArticle';
import { NotFoundPage } from './NotFoundPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = []
  }
  render () {
    return (
      <div className='container'>
        <Router>
        <React.Fragment>
          <Navigation />
          <WelcomeMessage />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/items' component={ItemsList} />
            <Route exact path='/assets' component={Home} />
            <Route exact path='/blueprint' component={Home} />
            <Route exact path='/metadata' component={Home} />
            <Route exact path='/manage' component={Home} />
            <Route exact path='/import' component={ImportItems} />
            <Route exact path='/write/:id' component={WriteItem} />
            <Route path='/write' component={WriteItem} />
            <Route exact path='/review/:id' component={Home} />
            <Route exact path='/news/:slug' component={NewsArticle} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
