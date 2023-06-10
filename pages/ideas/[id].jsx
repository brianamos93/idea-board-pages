export default function Idea({ post }) {
	return (
		<div>
	  		<h2>{post.title}</h2>
	  		<p>{post.body}</p>
	  	</div>
	);
}


export async function getStaticPaths() {
	// When this is true (in preview environments) don't
	// prerender any static pages
	// (faster builds, but slower initial page load)
	if (process.env.SKIP_BUILD_STATIC_GENERATION) {
	  return {
		paths: [],
		fallback: 'blocking',
	  };
	}
   
	// Call an external API endpoint to get posts
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await res.json();
   
	// Get the paths we want to prerender based on posts
	// In production environments, prerender all pages
	// (slower builds, but faster initial page load)
	const paths = posts.map((post) => ({
	  params: { id: post.id.toString() },
	}));
   
	// { fallback: false } means other routes should 404
	return { paths, fallback: blocking };
  }
   
export async function getStaticProps(context) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
	const post = await res.json();
   
	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
	  props: {
		post,
	  }, revalidate: 10,
	};
  }