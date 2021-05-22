import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ustilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={ustilStyles.headingMd}>
        <p>[Hello World]</p>
        <p>
          (My first personal website - more to learn at{' '}
          <a href="https://nextjs.org/learn">Tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
