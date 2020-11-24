import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./email-row.css"

export default class EmailRow extends Component {
  constructor(props) {
    super(props)
  }
  getClassName() {
    let style = "email-row "
    this.props.isRead[this.props.email.id] ? (style += "isread") : null
    if (this.props.currentRow) {
      style += " current-row "
    }
    return style
  }
  render() {
    const email = this.props.email
    return (
      <div className={this.getClassName()}>
        <div className="email-check">
          <input onChange={() => this.props.markAsRead(email.id)} type="checkbox" checked={this.props.isRead[email.id] || false} />
        </div>
        <Link to={`/emails/${email.id}`}>
          <div className="email-date">{email.date}</div>
          <div className="email-from">{email.email}</div>
          <div className="email-subject">{email.subject}</div>
          <div className="email-body">{email.email_body}</div>
        </Link>
      </div>
    )
  }
}
