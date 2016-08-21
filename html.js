import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography.js'

const BUILD_TIME = new Date().getTime()

const Html = ({ body, favicon }) =>
  <html lang='en'>
    <head>
      <meta charset='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
      <title>{DocumentTitle.rewind()}</title>
      <link rel='shortcut icon' href={favicon} />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </head>
    <body>
      <div id='react-mount' dangerouslySetInnerHTML={{ __html: body }} />
      <script src={prefixLink(`bundle.js?t=${BUILD_TIME}`)} />
    </body>
  </html>

Html.propTypes = {
  title: React.PropTypes.string
}

export default Html
