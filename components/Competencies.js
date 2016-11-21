import React from 'react'

const competencies = [
  { name: 'Front-end MV* development', values: ['React/Redux', 'Angular', 'jQuery', 'Prototyping'] },
  { name: 'Data visualization', values: ['D3', 'Victory', 'Open Data'] },
  { name: 'Site generation', values: ['Gatsby', 'Webpack', 'Stateless component architecture'] },
  { name: 'RESTful API and database programming', values: ['NodeJS', 'Ruby on Rails', 'SQL', 'MongoDB'] },
  { name: 'Test- and behavior-driven development', values: ['Agile development', 'Enzyme', 'Mocha', 'Karma'] }
]

const Competencies = () =>
  <main className='Competencies'>
    <h3>Competencies</h3>
    {competencies.map((c, i) =>
      <div className='competencies-table' key={i}>
        <div className='competency-name'>
          <strong>{c.name}</strong>
        </div>
        <div className='competency-values'>
          {c.values.map((v, j) => <span key={j} className='competency-value'>{v}</span>)}
        </div>
      </div>
    )}
  </main>

export default Competencies
