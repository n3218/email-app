import React, { Component } from "react"
import "./email-row.css"

export default class EmailRow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="email-row">
        <div className="email-date">{this.props.email.date}</div>
        <div className="email-from">{this.props.email.email}</div>
        <div className="email-subject">{this.props.email.subject}</div>
        <div className="email-body">{this.props.email.email_body}</div>
      </div>
    )
  }
}
