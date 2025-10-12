import { BlogContent } from "@/components/ui/blog-components"

type Props = {
  content: string
}

export function BlogPostContent({ content }: Props) {
  return <BlogContent content={content} />
}
