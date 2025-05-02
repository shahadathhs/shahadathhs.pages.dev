import { connectToDatabase } from "@/lib/db"
import { Blog } from "@/lib/models"
import { slugify } from "@/lib/utils"

export async function getFeaturedBlogs() {
  await connectToDatabase()

  // Get the 3 most recent blogs
  const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3).lean()

  return blogs
}

export async function getAllBlogs(query = "", category = "") {
  await connectToDatabase()

  const filter: any = {}

  if (query) {
    filter.$or = [{ title: { $regex: query, $options: "i" } }, { excerpt: { $regex: query, $options: "i" } }]
  }

  if (category) {
    filter.category = category
  }

  const blogs = await Blog.find(filter).sort({ createdAt: -1 }).lean()

  return blogs
}

export async function getBlogBySlug(slug: string) {
  await connectToDatabase()

  const blog = await Blog.findOne({ slug }).lean()

  return blog
}

export async function getBlogById(id: string) {
  await connectToDatabase()

  const blog = await Blog.findById(id).lean()

  return blog
}

export async function createBlog(blogData: {
  title: string
  excerpt: string
  category: string
  thumbnailUrl: string
  content: string
}) {
  await connectToDatabase()

  const slug = slugify(blogData.title)

  const blog = new Blog({
    ...blogData,
    slug,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  await blog.save()

  return blog
}

export async function updateBlog(
  id: string,
  blogData: {
    title: string
    excerpt: string
    category: string
    thumbnailUrl: string
    content: string
  },
) {
  await connectToDatabase()

  const slug = slugify(blogData.title)

  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    {
      ...blogData,
      slug,
      updatedAt: new Date(),
    },
    { new: true },
  )

  return updatedBlog
}

export async function deleteBlog(id: string) {
  await connectToDatabase()

  await Blog.findByIdAndDelete(id)

  return { success: true }
}

export async function getUserStats() {
  await connectToDatabase()

  // Get total posts
  const totalPosts = await Blog.countDocuments()

  // Get posts created this month
  const startOfMonth = new Date()
  startOfMonth.setDate(1)
  startOfMonth.setHours(0, 0, 0, 0)

  const postsThisMonth = await Blog.countDocuments({
    createdAt: { $gte: startOfMonth },
  })

  // Get total views (mock data for demo)
  const totalViews = Math.floor(Math.random() * 10000)
  const viewsThisMonth = Math.floor(Math.random() * 2000)

  // Get categories count
  const categoriesResult = await Blog.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ])

  const categories = categoriesResult.length

  // Get popular categories
  const popularCategories = categoriesResult.slice(0, 5).map((cat) => ({
    name: cat._id,
    count: cat.count,
  }))

  // Get average read time (mock data for demo)
  const avgReadTime = Math.floor(Math.random() * 8) + 3

  // Get recent posts
  const recentPosts = await Blog.find().sort({ createdAt: -1 }).limit(5).lean()

  return {
    totalPosts,
    postsThisMonth,
    totalViews,
    viewsThisMonth,
    categories,
    popularCategories,
    avgReadTime,
    recentPosts,
  }
}
