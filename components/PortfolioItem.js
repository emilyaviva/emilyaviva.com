import React from 'react'

const PortfolioItem = ({ name, href, imgSrc, imgAlt, desc }) =>
  <section className='PortfolioItem'>
    <a href={href}>
      <h3>{name}</h3>
      <img src={imgSrc} alt={imgAlt} />
    </a>
    <p>{desc}</p>
    <div style={{ clear: 'both' }} />
  </section>

export default PortfolioItem
