import React from 'react'
import Layout from '../layout'

export default class extends React.Component<{ username: string }> {
  static async getInitialProps({ query }) {
    return { username: query.username }
  }

  render() {
    return <Layout title="Profile">Hey, {this.props.username}</Layout>
  }
}
