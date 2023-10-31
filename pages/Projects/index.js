import PagesLayout from "../layout";
import Image  from "next/image"
import { projects } from "./data";
import styles from "./projects.module.css"

const Projects=()=>{
    return (
        <PagesLayout>
      
        <section className={styles.projectgrid}>
            {
                projects.map(({ name, imgsrc, description, skills, github, livesite},i)=>{
                    return(
                        <div key={i} className={styles.singleproject}>
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
        </PagesLayout>
    )
}

export default Projects;