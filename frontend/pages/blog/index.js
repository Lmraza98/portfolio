import dynamic from 'next/dynamic'
import isMobile from '../../app/utilities/isMobile'

const BlogDesktopView = dynamic (() => import('../../app/views/desktop').then( (mod) => (mod.BlogDesktopView ) ))
const BlogMobileView = dynamic (() => import('../../app/views/mobile').then( (mod) => (mod.BlogMobileView ) ))

function BlogPage (props) {
  const isMobileDevice = isMobile();

  return (isMobileDevice ? <BlogMobileView/> : <BlogDesktopView/>)
}

export default BlogPage;
