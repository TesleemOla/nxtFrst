import Nav from "./Components/Nav"
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div>
      <Nav />
      <main className={styles.main}>
        <section className="description">
          <div>
            <h1> My name is Tesleem,</h1>
            <h5>A front-End Developer</h5>
            <button className={styles.hirebtn}> Hire me</button>
            <button className={styles.contactbtn}>Contact me</button>
          </div>
        </section>
        <section>
          <div className={styles.game}>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
            <div className={styles.ball}></div>
          </div>
        </section>
      </main>
    </div>
    
  )
}

export default Home