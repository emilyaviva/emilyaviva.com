import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Template = ({ children }) =>
  <div className='page-wrap'>
    <Header />
    {children}
    <Footer />
  </div>

Template.propTypes = {
  children: React.PropTypes.any
}

export default Template
