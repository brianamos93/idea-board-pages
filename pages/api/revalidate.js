export default async function handler(req, res) {

    if (res.method != "POST") {
      res
        .status(400)
        .json({error: "Invalid HTTP method"})
    }
    // Check for secret to confirm this is a valid request
  
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }


  try {
    const body = req.body
    if (!body) {
      res.status(400).send("Bad Request: no body")
      return
    }

    const slugToRevalidate = body.slugToRevalidate
    if (slugToRevalidate) {
      await res.revalidate(`ideas/${slugToRevalidate}`)
      return res.json({ revalidate: true })
    }

  } catch (err) {
      return res.status(500).send('Error revalidating')
  }
}