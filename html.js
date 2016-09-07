import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()
const css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />

const Html = ({ body }) =>
  <html lang='en'>
    <head>
      <meta charset='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
      <title>{DocumentTitle.rewind()}</title>
      <link rel='icon' type='image/x-icon' href={prefixLink('/favicon/favicon.ico')} />
      <link rel='apple-touch-icon-precomposed' href={prefixLink('blue-fontain-pen-152-212880.png')} />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      {css}
    </head>
    <body>
      <div id='react-mount' dangerouslySetInnerHTML={{ __html: body }} />
      <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
    </body>
  </html>

const propTypes = {
  title: React.PropTypes.string
}

export default Object.assign(Html, propTypes)
