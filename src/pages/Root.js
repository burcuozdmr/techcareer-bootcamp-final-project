import React from 'react'
import VisualSlide from '../components/shared/VisualSlide'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <VisualSlide></VisualSlide>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Root
