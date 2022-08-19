import Link from 'next/link'
import styles from "./Styles/nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"
import { useState } from "react"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarsm}>
        {!isOpen?

        <GiHamburgerMenu onClick={()=> setIsOpen(!isOpen)} className={styles.close}/>:
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
            Home
        </Link>
        <Link href="/About">
            About
        </Link>
        <Link href="/Skills">
          Skills
        </Link>
        <Link href="/Projects">
          Project
        </Link>
        <Link href="/Contact">
            Contact
        </Link>
      </div>
        
    </nav>
  )
}

export default Nav