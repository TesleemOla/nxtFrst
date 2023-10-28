import React from 'react'
import Nav from "../Components/Nav"

const PagesLayout = ({children}) => {
  return (
    <html lang="en">
      <header>
        <Nav/>
      </header>
      <body>
        {children}
      </body>
    </html>
  )
}

export default PagesLayout