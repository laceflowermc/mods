import React from 'react'
import { HashRouter as Router, Switch, Route, HashRouter } from 'react-router-dom'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import { routes } from './routes'
import './App.scss'

class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div id="app">
          <Header routes={routes} />
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<Sidebar path={route.path} />}
              />
            ))}
          </Switch>
          <div id="content">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={route.component}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
