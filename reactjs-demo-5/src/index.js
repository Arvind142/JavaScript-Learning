import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactCard from "./ContactCard";
class App extends Component {
  state = {};
  render() {
    let contacts = [
      {
        id: 1,
        name: "Zatch Bell",
        gender: "Male",
        email: "zatch@bell.com",
        phone: "1234567890",
        picture:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
      {
        id: 2,
        name: "Zatch Bell2",
        gender: "Male2",
        email: "zatch@bell.com2",
        phone: "12345678902",
        picture:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
      {
        id: 3,
        name: "Zatch Bell3",
        gender: "Male3",
        email: "zatch@bell.com3",
        phone: "12345678903",
        picture:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
      {
        id: 4,
        name: "Zatch Bell4",
        gender: "Male4",
        email: "zatch@bell.com4",
        phone: "12345678904",
        picture:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
    ];
    let contact = {
      id: 1,
      name: "Zatch Bell",
      gender: "Male",
      email: "zatch@bell.com",
      phone: "1234567890",
      picture:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    };
    const ContactCards = contacts.map((c) => (
      <ContactCard key={c.id} contact={c} />
    ));
    console.log(ContactCards);
    return (
      <React.StrictMode>
        <div className="container">
          <h1 className="alert alert-primary">Working with arrays</h1>
          {ContactCards}
        </div>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
