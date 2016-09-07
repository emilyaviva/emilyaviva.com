import React from 'react'

const competencies = [
  { name: 'Front-end MV* development', values: ['React/Redux', 'Angular', 'jQuery', 'Prototyping'] },
  { name: 'Data visualization', values: ['D3', 'Victory', 'Open Data'] },
  { name: 'Site generation', values: ['Gatsby', 'Webpack', 'Stateless component architecture'] },
  { name: 'RESTful API and database programming', values: ['NodeJS', 'SQL', 'MongoDB'] },
  { name: 'Test- and behavior-driven development', values: ['Agile development', 'Enzyme', 'Mocha', 'Karma'] }
]

const Competencies = () =>
  <main className='Competencies'>
    <h3>Competencies</h3>
    <table>
      <tbody>
        {competencies.map((c, i) =>
          <tr key={i}>
            <td><strong>{c.name}</strong></td>
            <td>
              {c.values.map((v, j) => <span key={j} className='competency-value'>{v}</span>)}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </main>

export default Competencies
