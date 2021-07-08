import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

export function BlogApolloProvider({children}) {
  return (
    <ApolloProvider client={client}>
    {
      children
    }
  </ApolloProvider>
  )
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  return new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
      defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network'
        },
    },
    }),
    cache: new InMemoryCache(),
  });
}

export function getPostsByCategory()
{
  return gql`
    query($category: String)
    {
      categories(where: {nameLike: $category}) {
        edges {
          node {
            description
            name
            categoryId
            posts {
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
        }
      }
    }
  `
}
export function getInitialPageLoad()
{
  return gql`
  query
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
  `
}