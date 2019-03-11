import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import NewPlayer from './NewPlayer';
import Roster from './Roster';
import NotFound from './NotFound';

const App = () => (
  <React.Fragment>
    <Header title="Mad Libs" subheading="Welcome to My App" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/player/new" component={NewPlayer} />
      <Route path="/roster" component={Roster} />
      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);

export default App;
