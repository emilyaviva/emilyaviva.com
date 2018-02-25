import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import EmilyKaporMaterPhoto from './EmilyKaporMaterPhoto.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={EmilyKaporMaterPhoto}
          alt={`Emily Aviva Kapor-Mater`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          I am a full-stack software developer who finds <em>beauty in simplicity</em>. My mission is to create useful, meaningful, and socially positive experiences for end users and for other developers.
        </p>
      </div>
    )
  }
}

export default Bio
