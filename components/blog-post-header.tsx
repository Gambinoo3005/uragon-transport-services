import { FullScreenHero } from "@/components/ui/hero-components"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

type BlogPost = {
  title: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
}

type Props = {
  post: BlogPost
}

export function BlogPostHeader({ post }: Props) {
  return (
    <FullScreenHero
      title={post.title}
      description=""
      backgroundImage={post.image || "/placeholder.svg"}
      backgroundAlt={post.title}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <div className="space-y-6">
        <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
        <div className="flex items-center justify-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </div>
        </div>
      </div>
    </FullScreenHero>
  )
}
