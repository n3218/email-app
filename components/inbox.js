import React, { Component } from "react"
import emails from "../MOCK_DATA.json"
import EmailRow from "./email-row"

export default class Inbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: emails
    }
  }

  render() {
    console.log(this.state.emails)
    return (
      <div>
        <h1>React Inbox Starter</h1>
        <p>You have {this.state.emails.length} emails</p>
        <div>
          {this.state.emails.map(e => (
            <EmailRow email={e} />
          ))}
        </div>
      </div>
    )
  }
}
