import React, { Component } from "react";

interface InfoItemProps {
  text: string;
  icon: string;
  link?: string;
}
export default function InfoItem({ text, icon, link }: InfoItemProps) {
  if (link == undefined) {
    return (
      <div className="contact-info__item">
        <p className="contact-info__text">{text}</p>
        <i className={`${icon} contact-info__icon`} />
      </div>
    );
  } else {
    return (
      <div className="contact-info__item">
        <a href={link} className="contact-info__text">
          {text}
        </a>

        <i className={`${icon} contact-info__icon`} />
      </div>
    );
  }
}

// export class InfoItem extends Component {
//   render() {
//     if (this.props.link == undefined) {
//       return (
//         <div className="contact-info__item">
//           <p className="contact-info__text">{this.props.text}</p>
//           <i className={`${this.props.icon} contact-info__icon`} />
//         </div>
//       );
//     } else {
//       return (
//         <div className="contact-info__item">
//           <a href={this.props.link} className="contact-info__text">
//             {this.props.text}
//           </a>

//           <i className={`${this.props.icon} contact-info__icon`} />
//         </div>
//       );
//     }
//   }
// }
