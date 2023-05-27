export const getStaticProps = async () => {
	const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
	const repo = await res.json()
	return { props: { repo }}
}

export default function Page({ repo }) {
	return (
		<>
			<h2>Idea List</h2>
			<ul>
				{repo.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
				
			</ul>
		</>
	)
}