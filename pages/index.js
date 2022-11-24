import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'

export default function Home() {
  return (
   <>
   <Head>
    <title>Zeek List | Home</title>
    <meta name='keywords' content='zeek' />
   </Head>
    <div>
     <h1 className={styles.title}>Homepage</h1>
     <p className={styles.text}>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </p> 
     <Link href='/zeek' className={styles.btn}>
       See Zeek list
     </Link>
    </div>
   </>
  )
}
