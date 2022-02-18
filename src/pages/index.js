import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layouts'
import logo from './34496-plants.gif'
import indexStyles from './index.module.css'

const IndexPage = () => {
  return (
    <Layout>
    <Head title="Home" />
<h1>Hello.</h1>
<h2>I'm a Digital Film Production graduate, and I love to tell stories.</h2>
<p>Check out my <Link to="/blog">blog</Link>, and please feel free to contact me with any questions or inquiries <Link to="/contact">here.</Link></p>
<iframe src="https://player.vimeo.com/video/670299384?h=bc8aab37d6" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/670299384">GAME ON FINSIHED</a> from <a href="https://vimeo.com/user164749592">Tony Tewes</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
    </Layout>
  )
}

export default IndexPage
