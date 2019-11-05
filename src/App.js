import React from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Home from './page/Home'
import MysticalAgriculture from './page/MysticalAgriculture'
import { HashRouter, Switch, Route } from "react-router-dom"
import './App.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: () => <Home />
  },
  {
    path: '/mystical-agriculture',
    name: 'Mystical Agriculture',
    component: () => <MysticalAgriculture />
  }
]

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
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

export default App
