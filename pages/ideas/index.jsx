import Link from 'next/link'

export const getStaticProps = async () => {
	const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
	const repo = await res.json()
	return { props: { repo }}
}

export default function Page({ repo }) {
	
	const deletePost = async (id) => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.toString()}`, {
			method: 'DELETE'
		})
		const data = res.json()
		console.log(data)

	}

	const editPost = async (id) => {

	}

	return (
		<>
			<h2>Idea List</h2>
			<ul>
				{repo.map((post) => (
					<li key={post.id}>
						<Link href={`/ideas/${post.id}`}>{post.title}</Link>
						<button onClick={() => deletePost(post.id)}>Delete</button>
						<button onClick={() => editPost(post.id)}>Edit</button>
					</li>
				))}
				
			</ul>
		</>
	)
}