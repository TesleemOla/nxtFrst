import { useState, useEffect} from "react"
import Image  from "next/image"
import { projects } from "./data";
import styles from "./projects.module.css"

const Projects=()=>{
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(()=>{
        setFadeIn(true)
    },[])
    const anims=(i) => {
       return { transform: !fadeIn ? 'scale(0)': 'scale(1)',
        transition: `ease-in ${i+1}s`
    }
    }
    return (
      
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
                                <button className={styles.btngt}>
                                    <a href={github} target="_blank" rel="noopener noreferrer">Github</a></button>
                                <button className={styles.btndm}>
                                    <a href={livesite} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
                            </div>
                            <div>
                                {skills.map((item,i)=> <span key={i}> {item} </span>)}
                            </div>
                        </div>
                    )
                })
            }
        </section>
        
    )
}

export default Projects;