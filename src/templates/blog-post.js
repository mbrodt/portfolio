import React from 'react'
import styled from 'styled-components'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <BlogPostWrapper>
      <div>
        <PostData>{post.frontmatter.date}</PostData>
        <h1>{post.frontmatter.title}</h1>
      </div>
      <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
    </BlogPostWrapper>
  )
}

const BlogPostWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  color: #252525;
  font-family: medium-content-serif-font, Georgia, Cambria, 'Times New Roman',
    Times, serif;
  @media (max-width: 620px) {
    margin: 10px;
  }
`

const PostData = styled.span`
  font-style: italic;
  font-size: 1rem;
`

const BodyText = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
`

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
