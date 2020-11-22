import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "./email-read.css"

class EmailRead extends Component {
  componentWillUnmount() {
    const emailId = this.props.match.params.id
    this.props.markAsRead(emailId)
  }

  render() {
    const { emails, match } = this.props
    const email = emails.filter(e => e.id === match.params.id)[0]

    if (!email) {
      return (
        <>
          <h1>Error finding Email</h1>
          <p>Invalid email Id.</p>
          <p>
            <Link to="/">Go back to Inbox</Link>
          </p>
        </>
      )
    }
    return (
      <div className="email-read">
        <h1>{email.subject}</h1>
        <h3>
          {email.date} | {email.first_name} {email.last_name} | {email.email}
        </h3>
        <div>
          {email.email_body.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(EmailRead)
