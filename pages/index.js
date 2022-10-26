import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrew | Shopify Developer </title>
        <meta name="Andrew C Park" content="Shopify Developer" />
        <link rel="icon" href="/assets/acp-logo.png" />
      </Head>

    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}
