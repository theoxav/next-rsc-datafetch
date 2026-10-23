import { getPosts } from "@/db/sgbd"
import { notFound } from "next/dist/client/components/navigation"

const AboutPage = async () => {
  const posts = await getPosts()

  if(!posts || posts.length === 0) return notFound()

  return (
    <div className="mx-auto max-w-4xl p-6 text-lg">
      <h1 className="mb-4 text-center text-3xl font-bold"> Page About</h1>
      <ul className="list-disc p-4 pl-4">
        {posts?.map((post) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default AboutPage