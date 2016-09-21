import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import { default as Home } from "./components/Home"
import { default as Settings } from "./components/Settings"

import "./styles/reset.css"

const App = props => (<div>{props.children}</div>)

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>,
  document.getElementById("root")
)