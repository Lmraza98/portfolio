import dynamic from 'next/dynamic'
import isMobile from '../../app/utilities/isMobile'
import Blog from './blog.js'
import { gql } from '@apollo/client';

import { getApolloClient } from '../../app/utilities/apollo-client';

// const BlogDesktopView = dynamic (() => import('../../app/views/desktop').then( (mod) => (mod.BlogDesktopView ) ))
// const BlogMobileView = dynamic (() => import('../../app/views/mobile').then( (mod) => (mod.BlogMobileView ) ))

function BlogPage ({page, posts}) {
  const isMobileDevice = isMobile();
  console.log(page)
  console.log(posts)
  return <Blog page={page} posts={posts}></Blog>
  // return (isMobileDevice ? <BlogMobileView/> : <BlogDesktopView/>)
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

export default BlogPage;
