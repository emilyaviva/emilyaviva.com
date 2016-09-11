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

const propTypes = {
  children: React.PropTypes.any
}

export default Object.assign(Template, propTypes)
