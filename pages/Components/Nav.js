import Link from 'next/link'
import styles from "./Styles/nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"
import { useState } from "react"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  return (
    <nav className={styles.navbar}>
      <Link href="/" classname={styles.logo}>
        <h1>{"<Tesleem/>"}</h1>
      </Link>
      <div className={styles.navbarsm}>
        {!isOpen?

        <GiHamburgerMenu onClick={()=> setIsOpen(!isOpen)} className={styles.open}/>:
        <div>

            <FaTimes onClick={() => setIsOpen(!isOpen)} className={styles.close} />
          
          <div className={styles.dropdown}>
            <Link href="/" >
                <div onClick={() => setIsOpen(!isOpen)} className={styles.navitem}>
                Home
              </div>
            </Link>
            <Link href="/About">
              <div onClick={() => setIsOpen(!isOpen)} className={styles.navitem}>
                About
              </div>
            </Link>
            <Link href="/Skills">
                <div onClick={() => setIsOpen(!isOpen)} className={styles.navitem}>
                Skills
              </div>
            </Link>
            <Link href="/Projects">
                <div onClick={() => setIsOpen(!isOpen)} className={styles.navitem}>
                Project
              </div>
            </Link>
            <Link href="/Contact">
                <div onClick={() => setIsOpen(!isOpen)} className={styles.navitem}>
                Contact
              </div>
            </Link>
          </div>
         
        </div>
}
      </div>
      <div className={styles.navbarlg}>
        
        <Link href="/">
          <div className={styles.navitem}>
            Home
          </div>
        </Link>
        <Link href="/About">
          <div className={styles.navitem}>
            About
          </div>
        </Link>
        <Link href="/Skills">
          <div className={styles.navitem}>
            Skills
          </div>
        </Link>
        <Link href="/Projects">
          <div className={styles.navitem}>
            Project
          </div>
        </Link>
        <Link href="/Contact">
          <div className={styles.navitem}>
            Contact
          </div>
        </Link>
      </div>
        
    </nav>
  )
}

export default Nav