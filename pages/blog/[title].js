import client from "../../client"
import BlogHeaderImage from "../../components/BlogHeaderImage"

const Article = (props) => {
  const {
    blogName,
    content,
    blogMainImage
  } = props
  return (
    <article>
      <h1>{blogName}</h1>
      <BlogHeaderImage image={blogMainImage}></BlogHeaderImage>
    </article>
  )
}

Article.getInitialProps = async function(context) {
  // It's important to default the title so that it doesn't return "undefined"
  const { title = "" } = context.query
  return await client.fetch(`
    *[_type == "blog" && blogName == "${title}"][0]
  `)
}

export default Article
