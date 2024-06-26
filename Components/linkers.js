import React from "react"
import Link from "next/link"
import { FaLinkedinIn, FaCodepen, FaGithub } from "react-icons/fa";
import styles from "./Styles/linkers.module.css"

const Linkers=()=>{
    return (
    <div className={styles.iconssection}>
        <Link href="https://github.com/Tesleemola">
            
            <FaGithub className={styles.codepen} />
        </Link>
        <Link href="https://codepen.io/tesleemcodes/">
            <FaCodepen className={styles.codepen} />
        </Link>
        <Link href="https://www.linkedin.com/in/tesleemoladepo/">
            <FaLinkedinIn className={styles.linkedin} />
        </Link>
    </div>)
}

export default Linkers