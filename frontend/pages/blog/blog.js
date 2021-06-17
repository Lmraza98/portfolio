import styled from 'styled-components';

import Head from 'next/head'
import Link from 'next/link'


const BlogContainer = styled.div`


`
const MainContainer = styled.div`


`
const HeadingOne = styled.h1`


`
const Description = styled.p`


`
const Paragraph = styled.p`


`
const UList = styled.ul`

`
const ListItem = styled.li`


`
export default function Blog({ page, posts }) {
    console.log(page)
  const { title, description } = page;
  return (
    <BlogContainer>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <HeadingOne >{title}</HeadingOne>

        <Description >{ description }</Description>

        <UList >
          {posts && posts.length > 0 && posts.map(post => {
            return (
              <ListItem key={post.slug} >
                <Link href={post.path}>
                  <a>
                    <h3 dangerouslySetInnerHTML={{
                      __html: post.title
                    }} />
                    <div dangerouslySetInnerHTML={{
                      __html: post.excerpt
                    }} />
                  </a>
                </Link>
              </ListItem>
            );
          })}

          {!posts || posts.length === 0 && (
            <ListItem>
              <Paragraph>
                Oops, no posts found!
              </Paragraph>
            </ListItem>
          )}
        </UList>
      </MainContainer>
    </BlogContainer>
  )
}


