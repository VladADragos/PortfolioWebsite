import React, { Component } from "react";

import { Info } from "./info";
import { Form } from "./form";

export class Footer extends Component {
  render() {
    return (
      <section className="footer" id="footer">
        <div className="footer__container">
          <Form />
          <Info />
        </div>
      </section>
    );
  }
}
