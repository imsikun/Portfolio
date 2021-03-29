import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const contact = () => {
  return (
    <Layout>
      <SEO title='Contact' description='Contact me' />
      <section className='contact-page'>
        <article className='contact-form'>
          <h3>get in touch</h3>
          <form action='https://formspree.io/f/xqkwzgkj' method='POST'>
            <div className='form-group'>
              <input
                type='text'
                placeholder='name'
                name='name'
                className='form-control'
              />
              <input
                type='email'
                placeholder='email'
                name='email'
                className='form-control'
              />
              <textarea
                rows='5'
                name='message'
                placeholder='message'
                className='form-control'
              ></textarea>
            </div>
            <button type='submit' className='submit-btn btn'>
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
