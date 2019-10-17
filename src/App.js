import React from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="Content">
        Content
      </div>
    </div>
  )
}

export default App
