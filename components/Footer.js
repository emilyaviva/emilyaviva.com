import React from 'react'

const Footer = () =>
  <footer>
    <div className='footer-body'>
      <ul>
        <li>
          <a href='//github.com/gatsbyjs'>
            <i className='fa fa-pencil' aria-hidden='true' />
            Built with Gatsby
          </a>
        </li>
        <li>
          <i className='fa fa-code-fork' aria-hidden='true' />
          This website is open-source
        </li>
        <li>
          <a href='//aerobatic.com'>
            <i className='fa fa-square' aria-hidden='true' />
            Static hosting by Aerobatic
          </a>
        </li>
      </ul>
    </div>
  </footer>

export default Footer
