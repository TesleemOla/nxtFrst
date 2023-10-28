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
                                <button className={styles.btngt}>Github</button>
                                <button className={styles.btndm}>Live Demo</button>
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