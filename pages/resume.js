import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

const Resume = () =>
  <DocumentTitle title={`Resume | ${config.siteTitle}`}>
    <div className='other-main-wrapper'>
      <main className='Resume'>
        <h2>Resume</h2>
        <figure className='pdf'>
          <p>
            <Link to={prefixLink('/files/EmilyKaporMaterResume.pdf')}>Download in PDF format</Link>
          </p>
          <object
            data={prefixLink('/files/EmilyKaporMaterResume.pdf#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH')}
            type='application/pdf'
            width='100%'
            height='650px'
          >
            <p>
              It appears this browser might not have the capability to view embedded PDFs. No biggie…you can <Link to={prefixLink('/files/EmilyKaporMaterResume.pdf')}>click here to download the PDF file</Link>.
            </p>
          </object>
        </figure>
      </main>
    </div>
  </DocumentTitle>

export default Resume
