import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
	const paths = getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}

export default function Post() {
	return <Layout>...</Layout>
}