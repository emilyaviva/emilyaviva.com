import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import format from 'date-fns/format'
import Contact from '../components/Contact'
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
    if (this.props.route.page.file.name === '404') {
      return (
        <DocumentTitle title={config.siteTitle}>
          <div className='other-main-wrapper'>
            <main className='Error404'>
              <article dangerouslySetInnerHTML={{ __html: post.body }} />
              <Contact />
            </main>
          </div>
        </DocumentTitle>
      )
    }
    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <div className='other-main-wrapper'>
          <main className='BlogPost'>
            <section className='post-header'>
              <h1 className='title'>{post.title}</h1>
              <div className='date'>
                {format((post.date || new Date()), 'D MMMM YYYY')}
              </div>
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
        </div>
      </DocumentTitle>
    )
  }
}

export default MarkdownWrapper