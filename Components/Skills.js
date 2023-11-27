import React from 'react'
import styles from "./Styles/skills.module.css"
const Skills = ({item, i, styler}) => {


  return (
      <span key={i} style={styler} className={styles.skillspan}> {item} </span>
  )
}

export default Skills