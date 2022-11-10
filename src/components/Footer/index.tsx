import { useEffect, useState } from "react"
import { useSpring,animated } from "react-spring"
import styled from "styled-components"
import { autoWidthVW } from "../../common/Common"
import { footer_height, header_ZIndex, page_width } from "../../common/constants"
import { FlexViewBetween,FlexView, FlexViewColumn } from "../Common"
import { TextBold } from "../Text"
import { Drawer } from 'antd';
import { useModalContext } from "../../provider/modalProvider"

function Footer(){
  const [showBottom,setShowBottom] = useState(true)
  return <FooterView>
    <FooterContent style={showBottom?useSpring({
    from:{marginTop:70},to:{marginTop:0},config: {duration: 300}
    }):useSpring({
      from:{marginTop:0},to:{marginTop:70},config: {duration: 300}
    })}>
      <Content>
        <MusiclyricButton/>
        <MusicListButton/>
      </Content>
    </FooterContent>
    <SaleButtonView onClick={()=>{
      setShowBottom(!showBottom)
    }}>
    </SaleButtonView>
  </FooterView>
}
function MusiclyricButton(){
  const modalContent = useModalContext()

  function onShowLyric(){
    modalContent.show(<MusicLyricView onClose={()=>{
      modalContent.hidden()
    }}/>,{
      bottom:autoWidthVW(footer_height),
      left:0,
      top:'auto',
      backgroundColor:'transparent',
      width:autoWidthVW(400),
      height:autoWidthVW(400),
    })
  }

  return <FlexView>
    <TextBold onClick={onShowLyric}>歌词图标</TextBold>
  </FlexView>
}
function MusicLyricView({onClose}:any){
  return <MusicLyricViewInfo>
    <TextBold onClick={onClose}>关闭</TextBold>
  </MusicLyricViewInfo>
}
function MusicListButton(){
  const [open, setOpen] = useState(false);

  return <FlexView>
    <TextBold onClick={()=>setOpen(true)}>歌曲列表图标</TextBold>
    <Drawer
      bodyStyle={{padding:0,backgroundColor:'#121212'}}
      zIndex={20}
      placement={'right'}
      closable={false}
      onClose={()=>setOpen(false)}
      open={open}
      width={'20%'}>
      <MusicListView/>
    </Drawer>
  </FlexView>
}
function MusicListView(){
  return <FlexViewColumn>
    <TextBold>MusicListView</TextBold>
  </FlexViewColumn>
}
const MusicLyricViewInfo = styled(FlexViewColumn)`
  width: 100%;
  height:100%;
  border-bottom-right-radius: ${autoWidthVW(20)};
  border-top-right-radius:  ${autoWidthVW(20)};
  background-color: black;
`
const SaleButtonView = styled(FlexView)`
  position:absolute;
  bottom:${autoWidthVW(10)};
  right:${autoWidthVW(10)};
  background-color: purple;
  width:${autoWidthVW(44)};
  height:${autoWidthVW(44)};
  cursor: pointer;
`
const Content = styled(FlexViewBetween)`
  width:${autoWidthVW(page_width)};
  height:100%;
`
const FooterContent = styled(animated.div)`
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const FooterView = styled.div`
  width:100%;
  height:${autoWidthVW(footer_height)};
  position:fixed;
  z-index:${header_ZIndex};
  justify-content: center;
  bottom:0;
`

export default Footer