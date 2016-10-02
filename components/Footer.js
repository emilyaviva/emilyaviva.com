import React from 'react'

const footerItems = [
  { href: 'github.com/gatsbyjs', icon: 'pencil', text: 'Built with Gatsby' },
  { href: 'github.com/emilyaviva/emilyaviva.com', icon: 'code-fork', text: 'This website is open-source' },
  { href: 'www.aerobatic.com/', icon: 'cogs', text: 'Static hosted by Aerobatic' }
]

const Footer = () =>
  <footer className='Footer'>
    <ul>
      {footerItems.map((o, i) =>
        <li key={i}>
          <a href={`//${o.href}`}>
            <i className={`fa fa-${o.icon}`} aria-hidden='true' />
            <span className='footer-item-text'>{o.text}</span>
          </a>
        </li>
      )}
    </ul>
  </footer>

export default Footer
