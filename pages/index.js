import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'
import { Navbar } from '../components/Navbar.js'
import { Body } from '../components/Body.js'
import { Refresh } from '../components/Refresh.js'
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

export default function Home() {

  const [count, setCount] = useState(0);
  
  return (
     
    <div className="flex flex-col"> 
      
      <Head> 
        <title>{siteTitle}</title>
      </Head>

      <Navbar />
      <Body />
      <div>Hello World</div>

      <div className="container">

      <button className="bg-blue-500 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded">Hello</button>


      </div>
      
      <section >
        <p className="text-white">[Hello World]</p>
        <p>
          (My first personal website - more to learn at{' '}
          <a href="https://nextjs.org/learn">Tutorial</a>.)
        </p>
      </section>

      <Link href="/posts/first-post">
        <a>this page here!</a>
      </Link>

      </div>

  
  )
}