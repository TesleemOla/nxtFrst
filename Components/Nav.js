import Link from 'next/link'
import styles from "./Styles/nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"
import { useState, useEffect} from "react"
import { useRouter } from "next/router"

const Nav = () => {
  const router = useRouter()


  const [isOpen, setIsOpen] = useState(false)
  const [links, setLinks] = useState(["Home", "About", "Projects", "Contact"])

  const dropdown ={
    width: isOpen?'70vw': "0",
    height: isOpen? '60vh': "0",
    transition: 'ease-in-out 0.5s',
    background: 'var(--white)',
    color: 'var(--black)',
    fontWeight: 700,
    fontSize: '1.4em',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 10,
    top: '4.5rem',
    left: 0,

}
  
  return (
    <nav className={styles.navbar}>
      <Link href="/" classname={styles.logo}>
        <h1>{"<Tesleem/>"}</h1>
      </Link>
      <div className={styles.navbarsm} >
        {!isOpen?

        <GiHamburgerMenu onClick={()=> setIsOpen(!isOpen)} className={styles.open}/>:
        <FaTimes onClick={() => setIsOpen(!isOpen)} className={styles.close} />}
                    
          
          <div style={dropdown}>
            {
              links.map((item,i)=> {

                return <Link key ={i} href={item === "Home"? "/": item === "About"? "/#about": `/${item}` } >
                  
                  <div onClick={() => setIsOpen(!isOpen)} className={isOpen?styles.navitem: styles.hidden}>
                    {item}
                  </div>
                </Link>
              })
            }

          </div> 
         
        </div>

 
      <div className={styles.navbarlg}>
        {
          links.map((item, i) => {
            
            return <Link key={i} href={item === "Home" ? "/" : item === "About"? "/#about":  `/${item}`}>
              <div onClick={() => setIsOpen(!isOpen)} className={styles.navitem}>
                {item}
              </div>
            </Link>
          })
        }
      </div>
        
    </nav>
  )
}

export default Nav