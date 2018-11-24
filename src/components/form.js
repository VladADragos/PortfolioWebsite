import React, { Component } from "react";
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    // Initialize Firebase

    return (
      <form
        className="contact-form"
        data-netlify="true"
        onSubmit={this.handleSubmit}
        name="contact-form"
      >
        <div className="contact-form__input--row">
          <input
            className="contact-form__input"
            placeholder="Name"
            type="text"
            name="name"
          />
          <input
            className="contact-form__input"
            placeholder="Email"
            type="email"
            name="email"
          />
        </div>
        <textarea
          className="contact-form__input"
          placeholder="Message"
          name="message"
          id=""
          cols="18"
          rows="8"
        />
        <button className="contact-form__button" name="submit" type="submit">
          Submit <i className="fas fa-envelope" />
        </button>
      </form>
    );
  }
}
