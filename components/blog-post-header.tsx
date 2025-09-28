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
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-primary text-primary-foreground">{post.category}</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{post.title}</h1>
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
      </div>
    </section>
  )
}
