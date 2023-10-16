import Nav from "../../Components/Nav";
import Image  from "next/image"
import { projects } from "./data";
import styles from "./projects.module.css"

const Projects=()=>{
    return (
        <div>
            <Nav/>
        <section className={styles.projectgrid}>
            {
                projects.map(({ name, imgsrc, description, skills, github, livesite},i)=>{
                    return(
                        <div key={i} className={styles.singleproject}>
                            <Image src={imgsrc} alt={name}
                            width= {100}
                            height={100} />
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
        </div>
    )
}

export default Projects;