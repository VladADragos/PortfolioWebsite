import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import top from '../../images/top.svg';
import smoothScroll from '../../scripts/smoothScroll';
import styles from '../../styles/Home.module.scss'
export default function Main() {
  const scroll = () => {
    smoothScroll('.portfolio', 1000);
  };

  return (
    <section className={styles.hero}>
      <Navbar />
      <img src={top} alt='' className={styles.hero__image} />
      <div className={styles.hero__container}>
        <div className={styles["hero__text-container"]}>
          <h2 className={styles["hero__header"]}>VLAD DRAGOS</h2>
          <h3 className={styles["hero__sub-header"]}>
            Aspiring web developer Looking for part time job
            </h3>
          <a className={styles.hero__cta} onClick={scroll}>
            View Portfolio
            </a>
        </div>
      </div>
    </section>
  );

}
// export class Main extends Component {
//   scroll = () => {
//     smoothScroll('.portfolio', 1000);
//   };
//   render() {

//   }
// }
