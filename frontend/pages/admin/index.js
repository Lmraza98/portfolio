import dynamic from 'next/dynamic'
import isMobile from '../../app/utilities/isMobile'

const { AdminDesktopView, AdminMobileView, AdminTabletView } = dynamic (() => import('../../app/views').then((mod) => mod.HomeDesktopView))

const HomePage = (props) => {
  const isMobileDevice = isMobile();

  return (isMobileDevice ? <AdminMobileView/> : <AdminDesktopView/>)
}

export default HomePage;
