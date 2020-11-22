import React, { Component } from "react"
import Inbox from "./inbox"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import EmailRead from "./email-read"
import emails from "../MOCK_DATA.json"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: emails,
      isRead: {
        "306c7deb-d476-4eb6-bb8d-456f0fd6f5bf": true
      }
    }
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log("markAsRead: " + id)
    let isReadCopy = { ...this.state.isRead }
    isReadCopy[id] ? (isReadCopy[id] = false) : (isReadCopy[id] = true)
    this.setState({ ...this.state, isRead: { ...isReadCopy } })
  }

  render() {
    console.log(this.state)
    return (
      <div id="app-container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => <Inbox emails={this.state.emails} isRead={this.state.isRead} markAsRead={this.markAsRead} />} />
            <Route path="/emails/:id" component={() => <EmailRead emails={this.state.emails} isRead={this.state.isRead} markAsRead={this.markAsRead} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
