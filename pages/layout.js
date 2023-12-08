import React from 'react'
import Nav from "../Components/Nav"
import Linkers from "../Components/linkers"

const PagesLayout = ({children}) => {
  return (
    <>
      
        <Nav/>
        <Linkers />
      <section className="pgbg">
        {children}
      </section>
    </>
  )
}

export default PagesLayout