import React, { useState } from 'react'
import Layout from '../layout'
import Link from 'next/link'

const IndexPage: React.FC = () => {
  const [count, setCount] = useState(0)
  let message = 'Hello World!'
  console.log(message)
  return (
    <Layout>
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </Layout>
  )
}

export default IndexPage
