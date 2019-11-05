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
          <Sidebar routes={routes} />
          <div className="Content">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
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
