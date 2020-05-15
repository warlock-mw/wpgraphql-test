import React from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { useQuery, useMutation } from '@apollo/react-hooks'

import Layout from "@/components/templates/layout"
import Image from "@/components/atoms/image"
import SEO from "@/components/organisms/seo"

const WP_QUERY = gql`
  {
    posts {
      edges {
        node {
          acfTest {
            fieldGroupName
          }
          link
        }
      }
    }
  }
`

const WP_MUTATION = gql`
  mutation ($content: String!) {
    createComment(input: {content: $content, clientMutationId: "1", date: "2020-05-16 01:33:00", commentOn: 10, author: "a"}) {
      success
      clientMutationId
    }
  }
`

const IndexPage = () => {
  let input
  const { loading, error, data } = useQuery(WP_QUERY)
  const [addComment, { addData }] = useMutation(WP_MUTATION)

  console.log(data)
  console.log(addData)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          addComment({ variables: { content: input.value }, ignoreResults: false });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Comment</button>
      </form>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
