import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home1 from '../01-Home/Page1'
import Page2 from '../02-Page/Page2'
import Page3 from '../03-Page/Page3'

export default class extends React.Component {
  render() {
    return(
      <div>
        <div>Hello from Template</div>

        <Router>
          <div>

            <Link to="/">HOME</Link> | <Link to="/2">Page-2</Link> | <Link to="/3">Page-3</Link>

            <br/>
            <hr/>
            <br/>

            <Switch>
              <Route exact path="/" component={Home1} />
              <Route path="/2" component={Page2} />
              <Route path="/3" component={Page3} />
            </Switch>

          </div>
        </Router>

        <hr/>
        <p>By: Edmundo Rubio</p>

      </div>
    )
  }
}
