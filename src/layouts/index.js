import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      // Header for home page
      header = (
        <header>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <h1
              style={{
                ...scale(1.5),
                marginBottom: 0,
                marginTop: 0,
              }}
            >
              Emily Aviva Kapor-Mater
            </h1>
            <h3
              style={{
                ...scale(0.75),
                marginBottom: rhythm(1.25),
                marginTop: 0
              }}
            >
              Software Developer, Rabbi, Etc.
            </h3>
          </Link>
        </header>
      )
    } else {
      header = (
        // Header for pages, e.g. blog
        <header>
          <h3
            style={{
              fontFamily: 'lato, sans-serif',
              marginTop: 0,
              marginBottom: rhythm(1),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              Emily Aviva Kapor-Mater
            </Link>
          </h3>
        </header>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
