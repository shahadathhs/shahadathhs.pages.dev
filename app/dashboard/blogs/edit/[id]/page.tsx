import { notFound } from "next/navigation"
import { BlogForm } from "@/components/blog-form"
import { getBlogById } from "@/lib/blog-service"

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id)

  if (!blog) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Blog</h1>
        <p className="text-muted-foreground">Make changes to your blog post</p>
      </div>
      <BlogForm blog={blog} />
    </div>
  )
}
