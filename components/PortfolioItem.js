import React from 'react'

const PortfolioItem = ({ name, href, imgSrc, imgAlt, desc }) =>
  <section className='PortfolioItem'>
    <h3><a href={href}>{name}</a></h3>
    <a href={href}><img src={imgSrc} alt={imgAlt} /></a>
    <p>{desc}</p>
    <div style={{ clear: 'both' }} />
  </section>

PortfolioItem.propTypes = {
  name: React.PropTypes.string,
  href: React.PropTypes.string,
  imgSrc: React.PropTypes.string,
  imgAlt: React.PropTypes.string,
  desc: React.PropTypes.string
}

export default PortfolioItem