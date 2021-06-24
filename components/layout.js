import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Alex Braatz'
export const siteTitle = "Alex's Home Site"

export default function Layout({children, home}) {
	return(
		<div>
			{/* <Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Building my site with Next.js awww yeah"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head> */}
			<header>
				{ home ? (
					<>
					<Image
						priority
						src="/images/profile.jpg"
						height={400}
						width={600}
						alt={name}
					/>
					<h1 className="text-white">{name}</h1>
					</>
				) : (
					<>
					<Link href="/">
						<a>
							<Image
								priority
								src="/images/profile.jpg"
								height={108}
								width={108}
								alt={name}
							/>
						</a>
					</Link>
					<h2>
						<Link href="/">
							<a>{name}</a>
						</Link>
					</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← ← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
}