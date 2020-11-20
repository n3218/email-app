import React, { Component } from "react"
import Inbox from "./inbox"

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>React App Starter</h1>
        <p>
          <Inbox />
        </p>
      </div>
    )
  }
}
