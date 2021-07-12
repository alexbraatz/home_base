import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Navbar } from '../components/Navbar.js'
import { Base } from '../components/Base.js'
import { Who } from '../components/Who.js'
import { Work } from '../components/Work.js'
import { Example } from '../components/Example.js'
import { Refresh } from '../components/Refresh.js'
import Layout, { siteTitle } from '../components/layout'
import ustilStyles from '../styles/utils.module.css'
import Date from '../components/date'

import { Frame, Scroll } from 'framer-motion'


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


export default function Home() {

  const [count, setCount] = useState(0);

  return ( 
    <main className="max-h-screen w-full bg-gradient-to-r from-pink-600 to-purple-500">
     <Head> 
        <title>{siteTitle}</title>
      </Head>

      <Navbar />
      <Base />
      <div id="who">
        <Who />
      </div>
      <div id="work">
        <Work />
      </div>

      {/* <div className="flex flex-col">  */}
      
        {/* <Refresh onClick={() => setCount(count + 1)} />
        <div className="rounded-full h-auto w-auto bg-red-600">
          <Square key={count} />
        </div> */}

        {/* <div className="example-container">
          <Square key={count} />
        </div> */}


      {/* <div>Hello World</div> */}

      {/* <div className="container">

      <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded">Hello</button>


      </div> */}
      
      {/* <section >
        <p className="text-white">[Hello World]</p>
        <p>
          (My first personal website - more to learn at{' '}
          <a href="https://nextjs.org/learn">Tutorial</a>.)
        </p>
      </section> */}

      {/* <Link href="/posts/first-post">
        <a>this page here!</a>
      </Link> */}

      {/* </div> */}
    </main>
  
  )
}