import Link from "next/link"
import styles from "../styles/Home.module.css"


const Home = () => {


  return (
//  use clouds background with animation ?
       
      <main className="main">
        <section className="description">
          <div>
            <h1> Hello, {`I'm`} Tesleem</h1>
            <h5>A front-End Developer</h5>
            <button className={styles.hirebtn}> 
            <Link href="https://drive.google.com/file/d/1pkEifw-xr_JRE4LTlUT6emjQRoUQ1vge/view?usp=sharing"
            download >Download CV</Link></button>
            <button className={styles.contactbtn} >
              <Link href="mailto:oladepotesleem5@gmail.com">Contact me</Link>
              
              </button>
          </div>
          {/* <Image src="/images/profile.jpg" width= {300} height={300} style={{borderRadius: `30px 50%`}} alt="home profile" /> */}

        </section>
        

      </main>

       
        
    
    
  )
}

export default Home