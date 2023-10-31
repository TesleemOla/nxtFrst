import { useRouter } from "next/router"
import PagesLayout from "./layout";
import styles from "../styles/Home.module.css"


const Home = () => {

  const router = useRouter()
  return (

        <PagesLayout>
      <main className={styles.main}>
        <section className="description">
          <div>
            <h1> My name is Tesleem Oladepo</h1>
            <h5>A front-End Developer</h5>
            <button className={styles.hirebtn}> Hire me</button>
            <button className={styles.contactbtn} onClick={()=> router.push("/Contact") }>Contact me</button>
          </div>
        </section>  


          <h1>Skills</h1>
            <div>
              <div>
                <p>HTML</p>
              </div>
            </div>

      </main>

        </PagesLayout>
        
    
    
  )
}

export default Home