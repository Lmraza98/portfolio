import dynamic from 'next/dynamic'
import isMobile from '../../app/utilities/isMobile'
import Blog from './blog.js'
import { gql, useQuery } from '@apollo/client';
import { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../../app/contexts/GlobalContext';
// import { gql } from "@apollo/client";
import { getApolloClient, BlogApolloProvider, getPostsByCategory, getInitialPageLoad } from '../../app/utilities/apollo-client';

// const BlogDesktopView = dynamic (() => import('../../app/views/desktop').then( (mod) => (mod.BlogDesktopView ) ))
// const BlogMobileView = dynamic (() => import('../../app/views/mobile').then( (mod) => (mod.BlogMobileView ) ))

function BlogPage ({page, posts, tags, categories}) {

  
  const [ info, updateInfo ] = useState({page: page, posts: posts, tags: tags, categories: categories})
  const [ state ] = useContext(GlobalContext)
  // console.log("state.categories: " + state.categories)
  
  // useEffect(() => {
  //   if(state.categories && state.categories.length > 1)
  //   {
  //     let posts = state.categories.map((category) => {
  //       console.log("category" + JSON.stringify(category))
  //       let GET_POSTS_BY_CATEGORY = getPostsByCategory()
        
  //       let data = getPosts()
  //       // console.log(data)
  //       return data
  //     })
  //     // console.log(posts)
  //     updateInfo({...info, posts: posts})
  //   }
    
  // }, state.categories)
  
  return (<Blog tags={info.tags} page={info.page} posts={info.posts} categories={info.categories}></Blog>)
          
  // return (isMobileDevice ? <BlogMobileView/> : <BlogDesktopView/>)
}



export async function getStaticProps() {
  const client = getApolloClient();
  // client.query({
  //   query: GET_POSTS_BY_CATEGORY,
  //   variables: {
        
  //   }
  // })
  
  

  const data  = await client.query({
    query: gql`
      {
        generalSettings {
          title
          description
        }
        tags(first: 50) {
          edges {
            node {
              name
              description
            }
          }
        }
        categories {
          edges {
            node {
              description
              name
              categoryId
            }
          }
        }
        posts(first: 10) {
          edges {
            node {
              id
              excerpt
              title
              slug
              date
              tags {
                edges {
                  node {
                    name
                  }
                }
              }
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
  const tags = data?.data.tags.edges.map(({ node }) => node).map(tag => {
    return {
      ...tag
    }
  })
  const categories = data?.data.categories.edges.map(({ node }) => node).map(category => {
    return {
      ...category
    }
  })
  const blogPostsRssXml = blogPosts => {
    let latestPostDate = '';
    let rssItemsXml = '';
    posts.forEach(({ node }) => {
      const post = node;
      const postDate = Date.parse(post.date);

      // Remember to change this URL to your own!
      const postHref = `https://lucasraza.com/blog/${post.slug}`;

      if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
        latestPostDate = post.date;
      }

      rssItemsXml += `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${postHref}</link>
          <pubDate>${post.date}</pubDate>
          <guid isPermaLink="false">${postHref}</guid>
          <description>
          <![CDATA[${post.excerpt}]]>
          </description>
          <content:encoded>
            <![CDATA[${post.content}]]>
          </content:encoded>
      </item>`;
    });
    return {
      rssItemsXml,
      latestPostDate
    };
  };

  const getRssXml = blogPosts => {
    const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts);

    // Edit the '<link>' and '<description>' data here to reflect your own website details!
    return `<?xml version="1.0" ?>
    <rss
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:content="http://purl.org/rss/1.0/modules/content/"
      xmlns:atom="http://www.w3.org/2005/Atom"
      version="2.0"
    >
      <channel>
          <title><![CDATA[Frontend development articles by Rob Kendal]]></title>
          <link>https://myamazingwebsite.com</link>
          <description>
            <![CDATA[A description about your own website that really shows off what it's all about]]>
          </description>
          <language>en</language>
          <lastBuildDate>${latestPostDate}</lastBuildDate>
          ${rssItemsXml}
      </channel>
    </rss>`;
  };


  return {
    props: {
      page,
      posts,
      tags,
      categories
    }
  }
}

export default BlogPage;
