import React from 'react';
import Link from 'gatsby-link';

class Contact extends React.Component {
  render() {
    return (
      <div>
        Contact me!

        But first, select a reason:
        <a href="">Just writing...</a>
        <a href="">I want to work with you</a>
        {/*copy to clipboard*/}
        or:
        <a href="">Just give me your email!</a>
        <br />
        <br />
        <div>
          <form action="contact">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <br />
            <br />
            <textarea name="message" id="message" cols="30" rows="10" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
