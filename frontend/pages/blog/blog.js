import styled from 'styled-components';
import { Tag } from '../../app/views/desktop/components/elements'
import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalContext } from '../../app/contexts/GlobalContext';


const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
`
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 55% 1fr;
  grid-template-rows: 5% 95%;
  height: 100%;
  width: 100%;

`
const NavigationGridItem = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  // align-self: top;
  // justify-self: start;
  text-decoration: 'none';
`
const LeftGridItem = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
  padding-left: 20px;
`
const LeftContainer = styled.div
`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
const CategoriesContainer = styled.div`
  height: 100%;
  color: black;

`
const TopicsContainer = styled.div
`
// display: inherit;
  // align-self: start;
  // background-color: black;
  height: 100%;
  color: black;
  // text-align: center;
`
const EmailListContainer = styled.div
` 
  // align-self: end;
  // background-color: black;
  height: 50%;
  color: black;
  // text-align: center;
`
const PostsGridItem = styled.div`
  grid-column-start: 2;
  grid-column-send: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  // max-height: 100%;
  // height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
    
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  padding-left: 40px;
  padding-right: 40px;
`
const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: inherit;
  
  // overflow-y: scroll;
  // height: 100%;
` 
const PostBlockContainer = styled.div`
  text-decoration: none;
  
`
const Navigation = styled.div`
  // text-align: center;
  height: 100%;
  font-size: 30px;
  text-decoration: none;
`
const Paragraph = styled.p`
  width: 50%:
`
const ListItem = styled.div`

`
const TagList = styled.div
`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  padding-left: 20px;
`
const PostsTitle = styled.h1`
  text-align: left;
`
const RightGridItem = styled.div
`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 4;
  height: 100%;
  padding-right: 20px;
`
const ResourcesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  
  // align-items: center;
`
const ResourcesTitle = styled.div`
  text-align: center;
  align-self: center;
  justify-self: center;
  
`
const PostLink = styled.a`
  text-decoration: none;
` 
const PostTitle = styled.h3
`  
font-size: 30px;
`
const PostBody = styled.p`
font-size: 18px;
line-height: 2rem;
padding-left: 20px;
padding-right: 40px;
`
const Title = styled.h1`
  align-text: left;
`
const Selection = styled.div
`
display: flex;
flex-direction: column;
justify-content: space-around;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`
const Date = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`
const sliceCategory = (category, index) => {
  if(category.includes(' '))
  {
    return category.split(' ')[index]
  }else{
    return category
  }
  
}
const defineColor = (category) => {
  if(category)
  {
    category = sliceCategory(category, 0)
    let color = ""
    switch(category){
      case "Backend":
        color =  "Red"
        break;
      case "Frontend":
        color = "Blue"
        break;
      case "Dev-Ops":
        color = "Green"
        break;
      case "Design":
        color = "Purple"
        break;
      case "Security":
        color = "Orange"
        break;
    }
    return color
  }
}

export default function Blog({ page, posts, tags, categories }) {
  const [ state ] = useContext(GlobalContext)
  const { title, description } = page;
  return (
    <BlogContainer>
      <Head>
        <title>{`${title} -- ${description}`}</title>
        <meta name="description" content={`${title} -- ${description}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <NavigationGridItem>
            <Link href={"/"}>
              <Navigation>
                {title}
              </Navigation>
            </Link>
        </NavigationGridItem>
        <LeftGridItem>
          <LeftContainer>
            <Selection>
              <CategoriesContainer>
                <Title>
                  Categories
                </Title>
                <TagList>
                {
                  categories && categories.length > 0 && categories.map((category, index) => {
                    
                    return <Tag selectable={true} key={category.name}  name={category.name} color={defineColor(category.name)}/>
                    
                    
                  })
                }
                </TagList>
              </CategoriesContainer>
              <TopicsContainer>
                <Title>Topics</Title>
                <TagList>
                {
                  state.categories.length > 0 ? 
                  tags && tags.filter((tag) => { return state.categories.includes(sliceCategory(tag.name, 0))}).map((tag) => {
                    return (<Tag selectable={true} name={sliceCategory(tag.name, 1)}  key={tag.name} color={defineColor(tag.name)}/>)
                  }) : 
                  tags && tags.length > 0 && tags.map((tag, index) => {
                    return <Tag selectable={true} name={sliceCategory(tag.name, 1)}  key={tag.name} color={defineColor(tag.name)}/>
                  })
                }
                </TagList>
              </TopicsContainer>
            </Selection>
            <EmailListContainer>
              <Title>Get Notified When I Post</Title>
            </EmailListContainer>
          </LeftContainer>
        </LeftGridItem>
        <PostsGridItem>
        
          <PostsContainer>
            <PostsTitle>Posts</PostsTitle>
              {
                state.categories.length > 0 ? 

                posts && posts.length > 0 && posts.filter(post => { return post.tags.edges.filter((tag) => {return ( state.categories.includes( sliceCategory(tag.node.name, 0) ) ) }).length > 0}).map((post)=> {
                  return(
                    <PostBlockContainer key={post.slug} >
                        <Link href={post.path}>
                          <PostLink>
                            <Title dangerouslySetInnerHTML={{
                              __html: post.title
                            }} />
                          </PostLink>
                        </Link>
                        <FlexRow>
                          <Date>{
                          post.date.slice(0 ,post.date.indexOf('T'))
                          }</Date>
                          <TagList>
                          {
                            post.tags.edges.map((tag, index) => {
                              console.log('name ' + tag.node.name)
                              return(<Tag selectable={false} key={tag.node.name} name={sliceCategory(tag.node.name,1)} color={defineColor(tag.node.name)}/>)
                            })
                          }
                          </TagList>
                        </FlexRow>
                        <PostBody dangerouslySetInnerHTML={{
                          __html: post.excerpt
                        }} />
                      </PostBlockContainer> 
                  )
                
                })
                  : 
                  posts && posts.length > 0 && posts.map(post => { 
                    return(
                      <PostBlockContainer key={post.slug} >
                        <Link href={post.path}>
                          <PostLink>
                            <Title dangerouslySetInnerHTML={{
                              __html: post.title
                            }} />
                          </PostLink>
                        </Link>
                        <FlexRow>
                          <Date>{
                          post.date.slice(0 ,post.date.indexOf('T'))
                          }</Date>
                          <TagList>
                          {
                            post.tags.edges.map((tag, index) => {
                              console.log('name ' + tag.node.name)
                              return(<Tag selectable={false} key={tag.node.name} name={sliceCategory(tag.node.name,1)} color={defineColor(tag.node.name)}/>)
                            })
                          }
                          </TagList>
                        </FlexRow>
                        <PostBody dangerouslySetInnerHTML={{
                          __html: post.excerpt
                        }} />
                      </PostBlockContainer> 
                    )
                  
                  })
              }

              {!posts || posts.length === 0 && (
                
                <PostBody>
                  Oops, no posts found!
                </PostBody>
              )}
          </PostsContainer>
        </PostsGridItem>
        <RightGridItem>
          <ResourcesContainer>
            <Title>
              Resources
            </Title>
          </ResourcesContainer>
        </RightGridItem>
      </MainContainer>
    </BlogContainer>
  )
}


