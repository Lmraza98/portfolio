import React, { useContext } from "react";
import Image from 'next/Image'
import styled from "styled-components";
import { GlobalContext } from '../../../../../contexts/GlobalContext'

const LogoWhite = () => {
  return <Image src="/logo/logo-white.png" alt='LR logo' width="75" height="75"/>;
};
export const LogoBlack = () => {
  return <Image src="/logo/logo-black.png" alt='LR Logo' width="75" height="75"/>;
}
export default function Logo(){
  const { theme } = useContext(GlobalContext)
  const Logo = theme === 'light' ? <LogoBlack/> : <LogoWhite/> 
  return (
    // <div></div>
    Logo
  )
}
export { Logo };
