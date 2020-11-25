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
      },
      isSelected: 3
    }
    this.markAsRead = this.markAsRead.bind(this)
    this.markAllAsRead = this.markAllAsRead.bind(this)
    this.markAllAsUnread = this.markAllAsUnread.bind(this)
    this.keyPressHandler = this.keyPressHandler.bind(this)
  }

  markAsRead(id) {
    let isReadCopy = { ...this.state.isRead }
    isReadCopy[id] ? (isReadCopy[id] = false) : (isReadCopy[id] = true)
    this.setState({ ...this.state, isRead: { ...isReadCopy } })
  }
  markAllAsRead() {
    let allRead = {}
    this.state.emails.map(el => (allRead[el.id] = true))
    this.setState({ isRead: allRead })
  }
  markAllAsUnread() {
    this.setState({ isRead: {} })
  }
  keyPressHandler(e) {
    console.log(e.code)
    if (e.code === "KeyK") {
      this.setState({ isSelected: this.state.isSelected + 1 })
    }
    if (e.code === "KeyJ") {
      this.state.isSelected == 0 ? false : this.setState({ isSelected: this.state.isSelected - 1 })
    }
    if (e.code === "KeyX") {
      let currentRow = this.state.emails[this.state.isSelected].id
      //this.state.isRead[currentRow]
      let copyState = this.state
      copyState.isRead[currentRow] = !copyState.isRead[currentRow]
      this.setState({
        copyState
      })
    }
  }
  render() {
    console.log(this.state)
    return (
      <div id="app-container" onKeyPress={this.keyPressHandler} tabIndex="0">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => <Inbox emails={this.state.emails} isRead={this.state.isRead} markAsRead={this.markAsRead} markAllAsRead={this.markAllAsRead} markAllAsUnread={this.markAllAsUnread} isSelected={this.state.isSelected} />} />
            <Route path="/emails/:id" component={() => <EmailRead emails={this.state.emails} isRead={this.state.isRead} markAsRead={this.markAsRead} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
