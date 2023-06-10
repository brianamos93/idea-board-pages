import Link from "next/link";

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
	return (
		<section>
			<h1>{type} Post</h1>
			<p>{type} and share ideas with friends.</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Idea Name</span>
					<input 
					type="text" 
					name="title" 
					id="title"
					value={post.title}
					onChange={(e) => setPost({ ...post, title: e.target.value })}
					required
					 />
				</label>
				<label>
					<span>Idea Description:</span>
					<textarea 
					name="" 
					id=""
					value={post.body}
					onChange={(e) => setPost({ ...post, body: e.target.value })}
					placeholder="Write your post here"
					required
					/>
				</label>
				<div>
					<Link href="/">Cancel</Link>
					<button
					type='submit'
					disabled={submitting}>
						{submitting ? `${type}ing...` : type}
					</button>
				</div>
			</form>
		</section>
	)
}

export default Form