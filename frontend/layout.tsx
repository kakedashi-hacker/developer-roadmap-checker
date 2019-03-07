import React from 'react'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout: React.StatelessComponent<{ title?: string }> = props => (
  <div style={layoutStyle}>
    <Head>
      <title>Developer Roadmap {props.title && `| ${props.title}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {props.children}
  </div>
)

export default Layout