import React from 'react'
import Headroom from 'react-headroom'
import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'

const Template = ({ children }) =>
  <div>
    <Headroom disableInlineStyles>
      <SiteHeader />
    </Headroom>
    {children}
    <Footer />
  </div>

Template.propTypes = {
  children: React.PropTypes.any
}

export default Template
