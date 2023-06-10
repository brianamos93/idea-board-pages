import { useState } from "react"
import { useRouter } from "next/router"
import Form from "@/components/form"

export default function Page() {
	const router = useRouter()
	const [submitting, setSubmitting] = useState(false)
	const [post, setPost] = useState({ title: "", body: "" })

	const createIdea = async (e) => {
		e.preventDefault()
		setSubmitting(true)

		try {
			const res = await fetch("url", {
				method: "POST",
				body: JSON.stringify({
					title: post.title,
					body: post.body,
				}),
			})

			if (res.ok) {
				router.push("/")
			}
		} catch (error) {
			console.log(error)
		} finally {
			setSubmitting(false)
		}
	}
	
	return (
		<Form
			type='Create'
			post={post}
			setPost={setPost}
			submitting={submitting}
			handleSubmit={createIdea}
		/>

	)
}
