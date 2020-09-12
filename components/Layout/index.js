import React from 'react'
import Header from '../Header'
import PageFooter from '../PageFooter'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div classeName='container mx-auto'>
        {children}
      </div >
      <PageFooter />
    </div >
  )
}
export default Layout