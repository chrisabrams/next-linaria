import App from 'next/app'
import Header from '../components/header'
import Layout from '../layouts/default'
import { Main } from '../layouts/default/styles'
import { MDXProvider } from '@mdx-js/react'
import Navigation from '../components/navigation'
import React from 'react'

export default class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props

    return (
      <MDXProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    )
    
  }
}
