import styled from 'styled-components'

import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client'

import { getApolloClient } from '../../app/utilities/apollo-client'

const PostContainer = styled.div`


`
const MainContainer = styled.div`


`
const HeadingOne = styled.h1`


`
const ContentContainer = styled.div`



`
export default function Post({ post, site })
{
    return (
        <PostContainer>
          <Head>
            <title>{ post.title }</title>
            <meta name="description" content={`Read more about ${post.title} on ${site.title}`} />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <MainContainer>
            <HeadingOne>
              { post.title }
            </HeadingOne>
    
            <ContentContainer  dangerouslySetInnerHTML={{
                __html: post.content
            }} />
    
            <Link href="/blog">
            <a>
                &lt; Back to home
            </a>
            </Link>
          </MainContainer>
        </PostContainer>
      )
}

export async function getStaticProps({ params = {} } = {} ) {
    const { postSlug } = params;

    const apolloClient = getApolloClient()

    const data = await apolloClient.query({
        query: gql`
            query PostBySlug($slug: String!) {
                generalSettings {
                    title
                } 
                postBy(slug: $slug) {
                    id 
                    content
                    title
                    slug
                }
            }
        `,
        variables: {
            slug: postSlug
        }
    })

    const post = data?.data.postBy

    const site = { 
        ...data?.data.generalSettings
    }

    return {
        props: {
            post, 
            site
        }
    }
}

export async function getStaticPaths() {
    const apolloClient = getApolloClient()

    const data = await apolloClient.query({
        query: gql`
        {
            posts(first: 10000) {
                edges {
                    node {
                        id
                        title
                        slug
                    }
                }
            }
        }
        `
    })

    const posts = data?.data.posts.edges.map(({ node }) => node)

    return {
        paths: posts.map(({slug}) => {
            return {
                params: {
                    postSlug: slug
                }
            }
        }), fallback: false
    }
}