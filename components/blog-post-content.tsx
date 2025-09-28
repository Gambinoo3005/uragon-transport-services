type Props = {
  content: string
}

export function BlogPostContent({ content }: Props) {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} className="text-foreground" />
    </article>
  )
}
