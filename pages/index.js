import Nav from "./Components/Nav"
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div>
      <Nav />
      <main>
        <div className="description">
          <div>
            <h1> My name is Tesleem,</h1>
            <h5>A front-End Developer</h5>
            <button className={styles.homebtn}> Hire me</button>
          </div>
        </div>
      </main>
    </div>
    
  )
}

export default Home