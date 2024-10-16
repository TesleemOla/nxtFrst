import React from "react"
import Link from "next/link"
import { FaLinkedinIn, FaCodepen, FaGithub } from "react-icons/fa";
import styles from "./Styles/linkers.module.css"

const Linkers=()=>{
    return (
    <div className={styles.iconssection}>
        <Link href="https://github.com/Tesleemola" target="_blank" rel="noopener noreferrer">
        
            <FaGithub className={styles.codepen}  />
        </Link>
        <Link href="https://codepen.io/tesleemcodes/" target="_blank" rel="noopener noreferrer" >
            <FaCodepen className={styles.codepen} />
        </Link>
        <Link href="https://www.linkedin.com/in/tesleemoladepo/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className={styles.linkedin} />
        </Link>
    </div>)
}

export default Linkers