import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

//! Cách 1: document.getElementById("root") as HTMLElement
//! Cách 2: document.getElementById('root')!
//!=> 2 cách trên đều giúp typescript biết chắc chắn là HTMLElement

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)