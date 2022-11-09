import { useEffect, useState } from "react"
import styled from "styled-components"
import { autoWidthVW } from "../../common/Common"
import { header_height, header_ZIndex, page_width } from "../../common/constants"
import { FlexViewBetween,FlexView } from "../Common"
import { TextBold } from "../Text"

function Header(){
  const [alpha,setAlpha] = useState(0)
  function onWindowScroll(e:any){
    if (window.scrollY <= 70){
      setAlpha(window.scrollY / 100)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',onWindowScroll)
    return ()=>{
      window.removeEventListener('scroll',onWindowScroll)
    }
  },[])
  return <HeaderView>
    <BlurView alpha={alpha}/>
    <HeaderContent>
      <TextBold>哈哈哈哈哈</TextBold>
    </HeaderContent>
  </HeaderView>
}

const HeaderContent = styled(FlexViewBetween)`
  width:${autoWidthVW(page_width)};
  height:100%;
  z-index: 2;
`
const BlurView = styled(FlexView)<{
  alpha:number
}>`
  filter: blur(2px);
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height:100%;
  z-index: 1;
  background-color: ${({alpha})=>`rgba(0,0,0,${alpha})`};
`
const HeaderView = styled(FlexView)`
  width:100%;
  height:${autoWidthVW(header_height)};
  position:fixed;
  z-index:${header_ZIndex};
  justify-content: center;
`

export default Header