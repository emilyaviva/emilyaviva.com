import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import PortfolioItem from '../components/PortfolioItem'

const Talks = () =>
  <main className='talks'>
    <a name='talks' />
    <h2>Talks</h2>
    <PortfolioItem
      name='Painting the Data Picture with D3.js'
      href='http://emilyaviva.github.io/painting-data-d3'
      imgSrc={prefixLink('/img/donutchart.svg')}
      imgAlt='A miniature graph showing two lines.'
      desc='The D3.js data visualization library allows you to create fast, dynamic, customizable, and incredibly powerful SVG, HTML, and CSS straight from your data. It is one of the most popular technologies on the Web for complex data visualization, used by the New York Times, Square, YouGov, and many other organizations. In this workshop, I teach the basics of D3, showcasing some interactive visualizations based on open access data, and explore integrating D3 with popular front-end Web frameworks such as React and Angular.'
    />
    <PortfolioItem
      name='Learn to Love the JavaScript Ternary Operator'
      href='http://docs.google.com/presentation/d/15dZNCA-F8L-yk1vIcpNLpe-LvHoPmp_GRxo49VLzC30/'
      imageSrc={prefixLink('/img/ternary.svg')}
      imageAlt='A question mark followed by a colon.'
      desc='The poor, misunderstood ternary operator comes in for a lot of hate. In this lightning talk, I show why you need not be afraid of it and how it can help programmers write better, cleaner, more functional JavaScript. This talk was presented at Code Fellows during Seattle Startup Week, 27 October 2015.'
    />
  </main>

export default Talks
