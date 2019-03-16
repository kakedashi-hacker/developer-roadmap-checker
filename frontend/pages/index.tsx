import React, { useState, useEffect, Fragment } from 'react'
import Layout from '../layout'
import Link from 'next/link'
import firebase from '../config/firebase'

const IndexPage: React.FC = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  })

  const signIn = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  const signOut = () => {
    firebase.auth().signOut()
  }
  let message = 'Hello World!'
  console.log(message)
  console.log(user)
  return (
    <Layout>
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      {!user && (
        <Fragment>
          <p>Sign In</p>
          <button onClick={() => signIn()}>Sign In</button>
        </Fragment>
      )}
      {user && (
        <Fragment>
          <p>Hi, {user.displayName} !Sign Out</p>
          <p><img src={user.photoURL} alt=""/></p>
          <button onClick={() => signOut()}>Sign Out</button>
        </Fragment>
      )}

    </Layout>
  )
}

export default IndexPage
