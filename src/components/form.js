import React, { Component } from "react";
import * as firebase from "firebase";
export class Form extends Component {
  render() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDO8SnYoKpiwIkgnmAEd9qa_J6U5_slngk",
      authDomain: "sendemail-d46a1.firebaseapp.com",
      databaseURL: "https://sendemail-d46a1.firebaseio.com",
      projectId: "sendemail-d46a1",
      storageBucket: "sendemail-d46a1.appspot.com",
      messagingSenderId: "396400764517"
    };
    firebase.initializeApp(config);

    let messagesRef = firebase.database().ref("messages");

    const handleSubmit = e => {
      e.preventDefault();
      let name = e.target.name.value;
      let email = e.target.email.value;
      let message = e.target.message.value;
      console.log(name,email,message);
      saveMessage(name, email, message);
    };

    const saveMessage = (name, email, message) => {
      let newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        email: email,
        message: message
      });
    };

    return (
      <div className="contact">
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input placeholder="Name" type="text" name="name" />
            <input placeholder="Email" type="email" name="email" />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            id=""
            cols="18"
            rows="8"
          />
          <button className="button">
            Submit <i className="fas fa-envelope" />
          </button>
        </form>
      </div>
    );
  }
}
