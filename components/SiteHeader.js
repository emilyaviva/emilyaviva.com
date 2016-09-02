import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import capitalize from 'lodash/capitalize'

const pages = [
  { linkText: 'About' },
  { dest: 'blog' },
  { dest: 'portfolio' },
  { dest: 'talks' },
  { dest: 'resume' },
  { dest: 'contact' }
]

const SiteHeader = () =>
  <header className='SiteHeader'>
    <aside className='site-name'>
      <div className='name-title'>
        <Link to={prefixLink('/')}>
          Emily Aviva Kapor-Mater
        </Link>
      </div>
      <div className='name-subtitle'>
        <Link to={prefixLink('/')}>
          Full-Stack Software Developer
        </Link>
      </div>
    </aside>
    <nav className='site-nav'>
      <ul>
        {pages.map((p, i) =>
          <li key={i}>
            <Link to={p.dest ? `#${p.dest}` : '/'}>
              {p.linkText || capitalize(p.dest)}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  </header>

export default SiteHeader
