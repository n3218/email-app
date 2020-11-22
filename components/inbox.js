import React, { Component } from "react"
import EmailRow from "./email-row"

export default class Inbox extends Component {
  render() {
    return (
      <div>
        <h1>React Inbox Starter</h1>
        <p>You have {this.props.emails.length} emails</p>
        <div>
          <button>select all</button>
        </div>
        <div>
          <button>unselect all</button>
        </div>
        <div>
          {this.props.emails.map(e => (
            <EmailRow email={e} isRead={this.props.isRead} markAsRead={this.props.markAsRead} key={e.id} />
          ))}
        </div>
      </div>
    )
  }
}
