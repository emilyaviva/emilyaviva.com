import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Navigate from './Navigate'

const Header = () =>
  <header>
    <h1>Emily Aviva Kapor-Mater</h1>
    <h2>Full-Stack Software Developer</h2>
    <Navigate />
  </header>

export default Header
