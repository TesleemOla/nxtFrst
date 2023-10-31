import React from 'react'
import Nav from "../Components/Nav"

const PagesLayout = ({children}) => {
  return (
    <>
      
        <Nav/>
      
      <section style={{background: "#000"}}>
        {children}
      </section>
    </>
  )
}

export default PagesLayout