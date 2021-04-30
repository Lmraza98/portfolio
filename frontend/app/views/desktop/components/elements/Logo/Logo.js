import React, { useContext } from "react";
import Image from 'next/image'
import styled from "styled-components";
import { ThemeContext } from '../../../../../contexts/ThemeContext'

const LogoWhite = () => {
  return <Image src="/logo/logo-white.png" alt='LR logo' width="75" height="75"/>;
};
const LogoBlack = () => {
  return <Image src="/logo/logo-black.png" alt='LR Logo' width="75" height="75"/>;
}
export default function Logo(){
  const { theme } = useContext(ThemeContext)
  const Logo = theme === 'light' ? <LogoBlack/> : <LogoWhite/> 
  return (
    Logo
  )
}
export { Logo };
