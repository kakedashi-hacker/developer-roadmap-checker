import React from 'react'
import Layout from '../layout'
import Link from 'next/link'

const About: React.FC = () => {
  let username = 'yuki'
  return (
    <Layout title="About">
      <p>About us</p>
      <p>
        View our{' '}
        <Link
          href={`/profile?username=${username}`}
          as={`/profile/${username}`}
        >
          <a>Profile</a>
        </Link>
        !
      </p>
    </Layout>
  )
}

export default About
