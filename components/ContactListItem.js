import React from 'react'

const ContactListItem = ({ text, icon, href }) =>
  <li className='ContactListItem'>
    <i className={`fa fa-${icon}`} aria-hidden='false' />
    <span style={{ marginRight: '12px' }} />
    <a href={href}>{text}</a>
  </li>

const propTypes = {
  text: React.PropTypes.string,
  icon: React.PropTypes.string,
  href: React.PropTypes.string
}

export default Object.assign(ContactListItem, propTypes)
