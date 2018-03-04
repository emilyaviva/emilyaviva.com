import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'

import capitalize from 'lodash/capitalize'

const pages = ['about', 'blog', 'judaism', 'talks', 'resume', 'contact']

const SiteHeader = () => (
  <header
    className="SiteHeader"
    style={{
      backgroundImage: 'linear-gradient(#a6bdda, #ffffff)',
      padding: '12px 0 24px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <aside className="site-name">
      <div className="name-title">
        <Link to={'/'}>Emily Aviva Kapor-Mater</Link>
      </div>
    </aside>
    <nav
      className="site-nav"
      style={{
        height: '40px',
        marginRight: '12px',
        paddingTop: '6px'
      }}
    >
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        {pages.map(p => (
          <li
            key={`${p}_navlink`}
            style={{
              listStyleType: 'none',
              marginLeft: '16px',
              opacity: '0.5'
            }}
          >
            <Link to={p === 'about' ? '/' : `/${p}`}>{capitalize(p)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default SiteHeader
