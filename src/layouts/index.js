import React from 'react'
import { Container } from 'react-responsive-grid'
import SiteHeader from '../components/SiteHeader'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <Container
        style={{
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <SiteHeader />
        {children()}
      </Container>
    )
  }
}

export default Template
