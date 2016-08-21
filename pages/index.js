import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

import 'font-awesome/scss/font-awesome.scss'

const Index = () =>
  <DocumentTitle title={config.siteTitle}>
    <main className='about'>
      <section>
        <h2>About Me</h2>
        <p>I am a full-stack software developer who finds <em>beauty in simplicity</em>. My mission is to create useful, meaningful, and socially positive experiences for end users and for other developers.</p>
        <p>I am currently seeking software development job opportunities in the Seattle area. I obtained a certificate in Full-Stack JavaScript Development from <a href='https://www.codefellows.org/'>Code Fellows</a> in August 2015.</p>
      </section>
      <section>
        <img
          className='portrait'
          src={prefixLink('/img/EmilyKaporMaterPhoto.jpg')}
          alt='Photo of Emily'
        />
      </section>
      <section className='competencies'>
        <h3>Competencies</h3>
        <ul className='major-list'>
          <li>
            Front-end client-side and MV* development
            <ul className='sublist'>
              <li>React</li>
              <li>Redux</li>
              <li>Angular</li>
              <li>jQuery</li>
              <li>Sass</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </li>
          <li>
            Data visualization
            <ul className='sublist'>
              <li>D3</li>
              <li>Victory</li>
              <li>JSON</li>
              <li>Open data</li>
            </ul>
          </li>
          <li>
            Static site generation
            <ul className='sublist'>
              <li>Gatsby</li>
              <li>Webpack</li>
              <li>Browserify</li>
              <li>Stateless component achitecture</li>
            </ul>
          </li>
          <li>
            Backend RESTful API and database programming
            <ul className='sublist'>
              <li>Node</li>
              <li>Express</li>
              <li>Heroku</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
          </li>
          <li>
            Test- and behavior-driven development
            <ul className='sublist'>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>Mocha</li>
              <li>Karma</li>
              <li>Chai</li>
              <li>Jasmine</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  </DocumentTitle>

export default Index
