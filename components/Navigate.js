import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import capitalize from 'lodash/capitalize'

const Navigate = () => {
  const pages = [
    { linkText: 'About' },
    { dest: 'blog' },
    { dest: 'portfolio' },
    { dest: 'talks' },
    { dest: 'resume' },
    { dest: 'contact' }
  ]
  return (
    <nav>
      <ul>
        {pages.map((p, i) =>
          <li key={i}>
            <Link to={p.dest ? prefixLink(`/${p.dest}`) : '/'}>
              {p.linkText || capitalize(p.dest)}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigate
