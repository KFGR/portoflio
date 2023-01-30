import React    from "react";
import template from "./Contacts.jsx";

class Contacts extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Contacts;
