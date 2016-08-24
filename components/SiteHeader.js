import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Navigate from './Navigate'

const SiteHeader = () =>
  <header className='SiteHeader'>
    <Link to={prefixLink('/')}>
      <h1>Emily Aviva Kapor-Mater</h1>
      <h2>Full-Stack Software Developer</h2>
    </Link>
    <Navigate />
  </header>

export default SiteHeader
