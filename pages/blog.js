import React from 'react'
import { Link } from 'react-router'
import includes from 'lodash/includes'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'

class BlogIndex extends React.Component {
  static propTypes = {
    route: React.PropTypes.object
  }
  render () {
    const pageLinks = []
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !includes(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        const pageStub = (
          <li key={page.path}>
            <Link to={prefixLink(page.path)}>{title}</Link>
          </li>
        )
        pageLinks.push(pageStub)
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <main className='blog-index'>
          <ul>{pageLinks}</ul>
        </main>
      </DocumentTitle>
    )
  }
}

export default BlogIndex
