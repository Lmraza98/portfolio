import dynamic from 'next/dynamic'
import isMobile from '../app/utilities/isMobile'

const HomeDesktopView = dynamic (() => import('../app/views/desktop').then( (mod) => (mod.HomeDesktopView ) ))
const HomeMobileView = dynamic (() => import('../app/views/mobile').then( (mod) => (mod.HomeDesktopView ) ))

function HomePage ({ page, posts }) {
  const isMobileDevice = isMobile();

  return (isMobileDevice ? <HomeMobileView/> : <HomeDesktopView page={page} posts={posts} />)
}

export default HomePage;
