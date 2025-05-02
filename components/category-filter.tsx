"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = [
  { value: "", label: "All Categories" },
  { value: "technology", label: "Technology" },
  { value: "design", label: "Design" },
  { value: "business", label: "Business" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "health", label: "Health" },
]

export function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || ""

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set("category", value)
    } else {
      params.delete("category")
    }

    router.push(`/blogs?${params.toString()}`)
  }

  return (
    <Select value={currentCategory} onValueChange={handleCategoryChange}>
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
