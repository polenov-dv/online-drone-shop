import React from 'react'
import { Footer } from '../modules/Footer'
import { Header } from '../modules/Header'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
