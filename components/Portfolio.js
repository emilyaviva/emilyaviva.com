import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import PortfolioItem from './PortfolioItem'

const Portfolio = () =>
  <main className='Portfolio'>
    <a name='portfolio' />
    <h2>Portfolio</h2>
    <PortfolioItem
      name='Code Fellows — codefellows.org'
      href='https://codefellows.org'
      imgSrc={prefixLink('/img/codefellows.png')}
      imgAlt='Code Fellows logo - a red shield with text characters on it'
      desc='Code Fellows website description goes here'
    />
    <PortfolioItem
      name='The Extraterrestrial Birthday Calculator'
      href='http://etbirthday.com'
      imgSrc={prefixLink('/img/etbirthday.png')}
      imgAlt='Extraterrestrial Birthday Calendar logo - a planet with a birthday candle stuck in the top'
      desc='Find out your next birthday…if you had been born on another planet! This application is written in responsive client-side jQuery and Moment.js for doing calculations on past and future dates. The front-facing layout is written in Sass.'
    />
    <PortfolioItem
      name='The Universal Wishlist App'
      href='http://theuniversalwishlist.com'
      imgSrc={prefixLink('/img/wishlist.png')}
      imgAlt='Universal Wishlist App logo - an outline of a gift-wrapped box'
      desc='The Universal Wishlist is a web app to create customized wishlists of items from any site on the web. Its backend is written in Node, which is used to do API routing as well as send email regarding wishlists. The app’s frontend is written in React with JSX, with Gulp used as a build handler to bundle all client-side code.'
    />
    <PortfolioItem
      name='Safety Dance'
      href='https://github.com/emilyaviva/safety-dance-project'
      imgSrc={prefixLink('/img/safetydance.png')}
      imgAlt='Safety Dance logo - a toilet decorated with the transgender symbol'
      desc='One often underappreciated challenge in the lives of transgender people is the need to find washrooms that are as safe as possible when out in public. This app crowdsources and collates information about local facilities in a Mongo database, and presents it using a responsive interface in Angular. Safety Dance can plot the safe washrooms nearest to a user’s location on both desktop and mobile. It has an extensible API with comment moderation, written in Node and Express.'
    />
  </main>

export default Portfolio
