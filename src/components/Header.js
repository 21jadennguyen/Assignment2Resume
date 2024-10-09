import React from 'react';

class Header extends React.Component {
  render() {
    const { name, jobTitle, contact } = this.props;

    return (
      <div className="header">
        <div>
          <h1>{name}</h1>
          <p>{jobTitle}</p>
        </div>
        <div className="contact-info">
          <p>{contact.emailPreheader} <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p>{contact.webPreheader} {contact.web}</p>
          <p>{contact.phonePreheader} {contact.phone}</p>
        </div>
      </div>
    );
  }
}

export default Header;
