import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import ustilStyles from '../styles/utils.module.css'
import Date from '../components/date'


import { getSortedPostsData } from '../lib/posts'

// add an import for 'getSortedPostsData' and call it here
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// by returning 'allPostsData' inside the 'props' object in 'getStaticProps'
// the blog posts will be passed to the 'Home' component as a prop like so
export default function Home({ allPostsData }) {
  return (
    <body className="bg-gray-900 text-white">
     
    <Layout home>
      
      <Head> 
        <title>{siteTitle}</title>
      </Head>

      <div className="container">

      <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded">Hello</button>


      </div>
      
      <section className={ustilStyles.headingMd}>
        <p className="text-white">[Hello World]</p>
        <p>
          (My first personal website - more to learn at{' '}
          <a href="https://nextjs.org/learn">Tutorial</a>.)
        </p>
      </section>

      <section className={`${ustilStyles.headingMd} ${ustilStyles.padding1px}`}>
        <h2 className={ustilStyles.headingLg}>Blog</h2>
        <ul className={ustilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={ustilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
                </Link>
              <br />
              <small className={ustilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
            </li>
          ))}
        </ul>

      </section>
      <Link href="/posts/first-post">
        <a>this page here!</a>
      </Link>

    </Layout>
    </body>
  
  )
}