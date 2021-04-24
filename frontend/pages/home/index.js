import dynamic from 'next/dynamic'
import isMobile from '../../app/utilities/isMobile'

const HomeDesktopView = dynamic (() => import('../../app/views/desktop').then( (mod) => (mod.HomeDesktopView ) ))
const HomeMobileView = dynamic (() => import('../../app/views/mobile').then( (mod) => (mod.HomeDesktopView ) ))

function HomePage (props) {
  const isMobileDevice = isMobile();

  return (isMobileDevice ? <HomeMobileView/> : <HomeDesktopView/>)
}

export default HomePage;
