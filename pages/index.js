import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Talks from '../components/Talks'
import Contact from '../components/Contact'

import 'font-awesome/scss/font-awesome.scss'
import '../stylesheets/manifest.sass'

const Index = () =>
  <DocumentTitle title={config.siteTitle}>
    <div className='index-wrapper'>
      <About />
      <Portfolio />
      <Talks />
      <Contact />
    </div>
  </DocumentTitle>

export default Index
