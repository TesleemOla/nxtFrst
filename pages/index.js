import { useRouter } from "next/router"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import { FaLinkedinIn, FaCodepen, FaGithub } from "react-icons/fa";

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
        <div className={styles.iconssection}>
          <Link href="https://github.com/Tesleemola">  
          <FaLinkedinIn className={styles.linkedin} /> 
          </Link>
          <Link href="https://codepen.io/tesleemcodes/">
              <FaCodepen className={styles.codepen} /> 
           </Link>
          <Link href="https://www.linkedin.com/in/tesleemoladepo/">
             <FaGithub className={styles.codepen} />
          </Link>
        </div>  
        </section>
        

      </main>

       
        
    
    
  )
}

export default Home