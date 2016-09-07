import React from 'react'
import { prefixLink } from 'gatsby-helpers'

const About = () =>
  <main className='About'>
    <a name='about' />
    <section>
      <aside className='portrait'>
        <img
          src={prefixLink('/img/EmilyKaporMaterPhoto.jpg')}
          alt='Photo of Emily'
        />
      </aside>
      <h2>About Me</h2>
      <p>I am a full-stack software developer who finds <em>beauty in simplicity</em>. My mission is to create useful, meaningful, and socially positive experiences for end users and for other developers.</p>
      <p>I am experienced in both dynamic web application programming and static site generation. My work is primarily in the React/Redux ecosystem, as well as with Angular, jQuery, NodeJS, and other full-stack web technologies. My experience ranges from implementing prototypes in the financial technology industry to rewriting Ruby on Rails in modern, serverless JavaScript.</p>
      <p>I am continually seeking software development opportunities in the Seattle area. I obtained a certificate in Full-Stack JavaScript Development from <a href='https://www.codefellows.org/'>Code Fellows</a> in August 2015, and am currently working for Code Fellows as a software developer.</p>
    </section>
  </main>

export default About
