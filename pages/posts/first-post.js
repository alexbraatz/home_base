import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/alert'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Hello World</title>
            </Head>
            <h1>First Post</h1>

            <Alert type="success">Win!</Alert>
            <Alert type="error">Error</Alert>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}