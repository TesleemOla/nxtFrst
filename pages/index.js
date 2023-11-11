import { useRouter } from "next/router"
// import Image from "next/Image"
import styles from "../styles/Home.module.css"


const Home = () => {

  const router = useRouter()
  return (

       
      <main className="main">
        <section className="description">
          <div>
            <h1> Hello, {`I'm`} Tesleem</h1>
            <h5>A front-End Developer</h5>
            <button className={styles.hirebtn}> Download CV</button>
            <button className={styles.contactbtn} onClick={()=> router.push("/Contact") }>Contact me</button>
          </div>
          {/* <Image src="/images/profile.jpg" width= {300} height={300} style={{borderRadius: `30px 50%`}} alt="home profile" /> */}
        </section>  

      </main>

       
        
    
    
  )
}

export default Home