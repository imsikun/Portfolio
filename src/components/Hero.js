import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import SocialLinks from '../constants/socialLinks'

//querying the image with graphql
const query = graphql`
  {
    file(relativePath: { eq: "hero-img2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  //to get the data back use usestaticquery

  //simple querying the image from graphql
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query)

  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div>
            <h1>I'm Subh</h1>
            <h4>FrontEnd Developer</h4>
            <Link to='/contact' className='btn'>
              Contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className='hero-img' />
      </div>
    </header>
  )
}

export default Hero
