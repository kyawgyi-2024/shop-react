import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CartSection from '../components/CartSection'

const Mycart = () => {
  return (
    <Container className="flex-grow px-5">
      <BreadCrumb currentPageTitle="My Cart" />
      <CartSection />
    </Container>
  )
}

export default Mycart