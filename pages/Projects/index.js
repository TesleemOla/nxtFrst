import { useState, useEffect} from "react"
import Image  from "next/image"
import { projects } from "../../Components/data/data";
import styles from "./projects.module.css"
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

const Projects=()=>{
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(()=>{
        setFadeIn(true)
    },[])
    const anims=(i) => {
       return { transform: !fadeIn ? 'scale(0)': 'scale(1)',
                transition: `ease-in ${i*.5}s`
    }
    }
   

    return (
        <main className="pg-bg">
        <section className={styles.projectgrid}>
            {
                projects.map(({ name, imgsrc, description, skills, github, livesite},i)=>{
                return(
                    <div key={i} className={styles.singleproject} style={anims(i)}>
                        <Image src={imgsrc} alt={name}
                        width= {250}
                        height={250} />
                        <p className={styles.name}>{name}</p>
                        <p>{description}</p>
                        <div className={styles.btns}>
                            <div className={styles.btndv}>
                            <button className={styles.btngt}>
                                <FaGithub />
                                <a href={github} target="_blank" rel="noopener noreferrer">Github</a></button>
                            <button className={styles.btndm}>
                                <RiExternalLinkLine />
                                <a href={livesite} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                            </div>
                                <span style={{ fontWeight: "500" }}>Skills used:</span> {skills.map((item, i) => <span key={i} className={styles.spanskill}>{` ${item} `}</span>)}
                            
                        </div>
                        
                    </div>
                )
                })
            }
        </section>
        </main>
    )
}

export default Projects;