import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, Home, About, Contact as Contacts, NotFound } from './index'

import 'materialize-css/dist/css/materialize.css';

const PageTemplate = () => {
  return (
    <Router>
      <div className="PageTemplate">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contacts/" component={Contacts} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default PageTemplate;
