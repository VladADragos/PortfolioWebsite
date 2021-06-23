import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Home from '../components/pages/Home';
export default function Index() {
  return (
    // <MainPage />
    // <h1 className={styles.testing} >hello world</h1>
    <Home />
    // <h1>hello?</h1>
  )
}
