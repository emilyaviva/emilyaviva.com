import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import ContactListItem from '../components/ContactListItem'

const Contact = () =>
  <DocumentTitle title={`${config.siteTitle} | Contact`}>
    <main className='contact'>
      <h2>Contact</h2>
      <ul className='contactListItems'>
        <ContactListItem
          icon='github'
          href='https://github.com/emilyaviva'
          text='GitHub: EmilyAviva'
        />
        <ContactListItem
          icon='twitter'
          href='https://twitter.com/emilyaviva'
          text='Twitter: @EmilyAviva'
        />
        <ContactListItem
          icon='linkedin'
          href='https://linkedin.com/in/emilykapor'
          text='LinkedIn: My profile'
        />
      </ul>
      <ul className='contactListItems'>
        <ContactListItem
          icon='envelope-o'
          href='mailto:emily@emilyaviva.com'
          text='Email: emily@emilyaviva.com'
        />
        <ContactListItem
          icon='lock'
          href='http://pgp.mit.edu/pks/lookup?op=get&search=0xC79A341B47E21F8A'
          text='Public GnuPG/PGP key'
        />
      </ul>
      <ul className='contactListItems'>
        <ContactListItem
          icon='phone'
          href='tel:16174449089'
          text='+1 (617) 444-9089'
        />
      </ul>
    </main>
  </DocumentTitle>

export default Contact
