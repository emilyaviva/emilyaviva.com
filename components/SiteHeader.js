import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import capitalize from 'lodash/capitalize'

const pages = [
  { linkText: 'About' },
  { linkText: 'Blog', dest: '/blog' },
  { dest: 'portfolio' },
  { dest: 'talks' },
  { linkText: 'Resume', dest: '/resume' },
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
        {pages.map((p, i) => {
          const linkText = p.linkText || capitalize(p.dest)
          const target = p.dest
            ? p.dest.substr(0, 1) !== '/'
              ? `/#${p.dest}`
              : p.dest
            : '/'
          const linkElem = target.substr(0, 1) === '#'
            ? <a href={target}>{linkText}</a>
            : <Link to={target}>{linkText}</Link>
          return <li key={i}>{linkElem}</li>
        })}
      </ul>
    </nav>
  </header>

export default SiteHeader
