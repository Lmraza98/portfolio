import React from 'react'
import styled from 'styled-components'
import { Chat,  GreetingsLine, ScrollElement } from '../../elements'

const GreetingsGridContainer = styled.div`
    display: grid;
    height: 100%;
    align-items: center;
`
const GreetingsGridItem = styled.div`
    justify-self: center;
`
const MainStatement = styled.div`


`


export const Greetings = ({children, name}) => {
    return (
    // <ScrollElement name="experience">
        <GreetingsGridContainer>
            <GreetingsGridItem>
                Greetings
            </GreetingsGridItem>
        </GreetingsGridContainer>
    // {/* </ScrollElement> */}
    )
}

export async function getStaticProps() {
    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: gql`
        {
          generalSettings {
            title
            description
          }
          posts(first: 10000) {
            edges {
              node {
                id
                excerpt
                title
                slug
              }
            }
          }
        }
      `,
    });
  
    const posts = data?.data.posts.edges.map(({ node }) => node).map(post => {
      return {
        ...post,
        path: `/posts/${post.slug}`
      }
    });
  
    const page = {
      ...data?.data.generalSettings
    }
  
    return {
      props: {
        page,
        posts
      }
    }
  }
