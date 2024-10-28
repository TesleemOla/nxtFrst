import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import About from "../Components/About"


const Home = () => {

  return (

       
      <main className="pg-bg">
        <section className={styles.hpgsection}>
          <div>
            <h1> Hi, {`I'm`} Tesleem</h1>
            <h5>A front-End Developer</h5>
            <button className={styles.hirebtn}> 
            <Link href="https://drive.google.com/file/d/1pkEifw-xr_JRE4LTlUT6emjQRoUQ1vge/view?usp=sharing"
            download >Download my CV</Link></button>
            <button className={styles.contactbtn} >
              <Link href="mailto:oladepotesleem5@gmail.com">Contact me</Link>
              
              </button>
          </div>
          <Image src="/images/profile.jpg" width= {500} height={500} alt="home profile" 
          className={styles.myim}/>

        </section>
      
        <About />

     
      </main>

       
        
    
    
  )
}

export default Home