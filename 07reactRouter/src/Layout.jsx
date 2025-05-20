import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' //isko bicch mein lagay hua hai toh iske upppar aur nicche dono jagahsame rahenge change nhi hoga sirf bicch main hi change hoga


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout