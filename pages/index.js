import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

import 'font-awesome/scss/font-awesome.scss'
import '../stylesheets/manifest.sass'

const competencies = [
  { name: 'Front-end MV* development', values: ['React/Redux', 'Angular', 'Prototyping'] },
  { name: 'Data visualization', values: ['D3', 'Victory', 'Open Data'] },
  { name: 'Site generation', values: ['Gatsby', 'Webpack', 'Stateless component architecture'] },
  { name: 'RESTful API and database programming', values: ['NodeJS', 'SQL', 'MongoDB'] },
  { name: 'Test- and behavior-driven development', values: ['Enzyme', 'Mocha', 'Karma'] }
]

const Index = () =>
  <DocumentTitle title={config.siteTitle}>
    <main className='about'>
      <section>
        <aside className='portrait'>
          <img
            src={prefixLink('/img/EmilyKaporMaterPhoto.jpg')}
            alt='Photo of Emily'
          />
        </aside>
        <h2>About Me</h2>
        <p>I am a full-stack software developer who finds <em>beauty in simplicity</em>. My mission is to create useful, meaningful, and socially positive experiences for end users and for other developers.</p>
        <p>I am currently seeking software development job opportunities in the Seattle area. I obtained a certificate in Full-Stack JavaScript Development from <a href='https://www.codefellows.org/'>Code Fellows</a> in August 2015.</p>
      </section>
      <section className='competencies'>
        <h3>Competencies</h3>
        <table>
          {competencies.map((c, i) =>
            <tr key={i}>
              <td><strong>{c.name}</strong></td>
              <td>
                {c.values.map((v, j) => <span className='competency-value'>{v}</span>)}
              </td>
            </tr>
          )}
        </table>
      </section>
    </main>
  </DocumentTitle>

export default Index
