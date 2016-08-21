import React from 'react'

const ContactListItem = ({ text, icon, href }) =>
  <li className='ContactListItem'>
    <i className={`fa fa-${icon}`} aria-hidden='false' />
    <span style={{ marginRight: '12px' }} />
    <a href={href}>{text}</a>
  </li>

export default ContactListItem
