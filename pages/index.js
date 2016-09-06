import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Talks from '../components/Talks'
import Contact from '../components/Contact'

import 'font-awesome/scss/font-awesome.scss'
import '../stylesheets/vendor/atom-one-dark.css'
import '../stylesheets/manifest.sass'

const mains = [<About />, <Portfolio />, <Talks />, <Contact />]

const Index = () =>
  <DocumentTitle title={config.siteTitle}>
    <div className='index-wrapper'>
      {mains.map((p, i) => <div key={i} className='index-main-wrapper'>{p}</div>)}
    </div>
  </DocumentTitle>

export default Index
