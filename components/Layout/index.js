import React from 'react'
import Header from '../Header'
import Footer from '../PageFooter'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div classeName='container mx-auto'>
        {children}
      </div >
      <Footer />
    </div >
  )
}
export default Layout