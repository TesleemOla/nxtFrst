import React from 'react'
import Nav from "../Components/Nav"

const PagesLayout = ({children}) => {
  return (
    <>
      
        <Nav/>
      
      <section className="pgbg">
        {children}
      </section>
    </>
  )
}

export default PagesLayout