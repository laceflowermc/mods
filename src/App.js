import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import { routes } from './routes'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
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
          <div className="Content">
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
      </HashRouter>
    )
  }
}

export default App
