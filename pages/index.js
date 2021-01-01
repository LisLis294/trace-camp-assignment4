import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react"
import axios from "axios"

export default function Home() {
  const [calculator, setCalculator] = React.useState();
  const [fname, setFname] = React.useState("");
  const [sname, setSname] = React.useState("");

  const onSubmit = (event) => { 
    event.preventDefault();
    axios.get(`/api/calc?fname=${fname}&sname=${sname}`).then((response) => setCalculator(response.data.result));
    
    console.log("Submitted");
  }

  return(
    <main>
      <form onSubmit={onSubmit}>
        <label htmlFor="name1">Name 1: </label>
        <input id="name1" value={fname} onChange={(event) => setFname(event.target.value) }>
        </input>
        <label htmlFor="name2">Name 2:</label>
        <input id="name2" value={sname} onChange={(event) => setSname(event.target.value)}>
        </input>

        <button type="submit">Submit!</button>
      </form>
      <h1>{calculator}</h1>
    </main>
  )
}
/*export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
*/