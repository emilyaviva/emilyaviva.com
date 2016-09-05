import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import format from 'date-fns/format'
import ReactDisqusThread from 'react-disqus-thread'

class MarkdownWrapper extends React.Component {
  static propTypes = {
    router: React.PropTypes.object
  }
  handleNewComment (comment) {
    console.log(comment.text)
  }
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <main className='BlogPost'>
          <section className='post-header'>
            <span className='date'>
              {format((post.date || new Date()), 'D MMMM YYYY')}
            </span>
            <h1 className='title'>{post.title}</h1>
          </section>
          <article dangerouslySetInnerHTML={{ __html: post.body }} />
          <div className='disqus-wrapper'>
            <ReactDisqusThread
              shortname='eakm-blog'
              identifier={post.title}
              title={post.title}
              url={`http://emilyaviva.com/blog/${this.props.route.page.path}`}
              onNewComment={this.handleNewComment}
            />
          </div>
        </main>
      </DocumentTitle>
    )
  }
}

export default MarkdownWrapper
