import React, { Component } from "react";

interface SkillProps {
  color: string;
  icon: string;
  text: string;
}

export default function Skill({ color, icon, text }: SkillProps) {
  return (
    <div className="skill" style={{ color: color }}>
      <i className={`${icon} skill__icon`} />
      <h4 className="skill__text">{text}</h4>
    </div >
  );
}
// export class Skill extends Component {
//   render() {
//     let color = { color: this.props.color };
//     return (
//       <div className="skill" style={color}>
//         <i className={`${this.props.icon} skill__icon`} />
//         <h4 className="skill__text">{this.props.text}</h4>
//       </div>
//     );
//   }
// }
