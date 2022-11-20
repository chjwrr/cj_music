import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { autoWidthVW } from "../../common/Common"
import { header_height, header_ZIndex, page_width,colors } from "../../common/constants"
import { FlexViewBetween,FlexView,FlexViewColumn,SpaceWidth,FlexViewCenter } from "../Common"
import { Text,TextBold } from "../Text"
import Image from 'next/image'
import ImageCommon from '../../../public/images/ImageCommon'
import {animated, useSpring } from "react-spring";
import { useRouter } from "next/router";
import {Input} from 'antd'

const left = 150
function Header(){
  const router = useRouter()
  const [alpha,setAlpha] = useState(0)
  const [selectIndex,setSelectIndex] = useState(0)
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

  const styles = useSpring({
    loop: false,
    from: { left: autoWidthVW(left) },
    to: { left: autoWidthVW(150 + selectIndex * (60 + 40)) },
    config: {
        duration: 300,
    },
  })

  return <HeaderView>
    <BlurView alpha={alpha}/>
    <HeaderContent>
      <FlexView>
        <Logo onClick={()=>{
          setSelectIndex(-1)
          router.push('/')
        }}>
          <Image src={ImageCommon.logo} alt='' fill/>
        </Logo>
        <ItemView onClick={()=>{
          setSelectIndex(0)
          router.push('/song')
        }}>
          <Text color={selectIndex == 0 ? colors.main : '#fff'} size={16} webSize={20}>歌曲</Text>
        </ItemView>
        <ItemView onClick={()=>{
          setSelectIndex(1)
          router.push('/songList')
        }}>
          <Text color={selectIndex == 1 ? colors.main : '#fff'} size={16} webSize={20}>歌单</Text>
        </ItemView>
        <ItemView onClick={()=>{
          setSelectIndex(2)
          router.push('/singer')
        }}>
          <Text color={selectIndex == 2 ? colors.main : '#fff'} size={16} webSize={20}>歌手</Text>
        </ItemView>
        <ItemView onClick={()=>{
          setSelectIndex(3)
          router.push('/mv')
        }}>
          <Text color={selectIndex == 3 ? colors.main : '#fff'} size={16} webSize={20}>MV</Text>
        </ItemView>
        <ItemView onClick={()=>{
          setSelectIndex(4)
          router.push('/genre')
        }}>
          <Text color={selectIndex == 4 ? colors.main : '#fff'} size={16} webSize={20}>曲风</Text>
        </ItemView>
      </FlexView>
      <SearchBar/>
      {router.pathname != '/' && <Line style={{...styles}}/>}
    </HeaderContent>
  </HeaderView>
}
interface SearchType {
  name:string,
  tag:number
}
const typeInfo:SearchType[] = [
  {
    name:'单曲',
    tag:1
  },
  {
    name:'歌手',
    tag:100
  },
  {
    name:'歌单',
    tag:1000
  },
  {
    name:'MV',
    tag:1004
  }
]
function SearchBar(){
  const searchRef = useRef('')
  const [showType,setShowType] = useState(false)
  const [select,setSelect] = useState(0)

  function onMouseEnter(){
    setShowType(true)
  }
  function onMouseLeave(){
    setShowType(false)
  }
  if (showType){
    return <SearchBarView>
      <ChooseView onMouseLeave={onMouseLeave}>
        {
          typeInfo.map((item:SearchType,index:number)=>{
            return <TypeView key={item.tag} onClick={()=>{
              setSelect(index)
              setShowType(false)
            }}>
              <Text color={select == index ? colors.main : '#fff'} size={14} webSize={16}>{item.name}</Text>
            </TypeView>
          })
        }
      </ChooseView>
    </SearchBarView>
  }
  return <SearchBarView>
    <TypeView onMouseEnter={onMouseEnter}>
      <Text color={colors.main} size={14} webSize={16}>{typeInfo[select].name}</Text>
    </TypeView>
    <LineV/>
    <Input
      style={{
        color:'#fff',
        fontSize:autoWidthVW(16),
        flex:1,
        fontFamily:'BOOKOSI'
      }}
      placeholder={`请输入${typeInfo[select].name}关键字...`}
      bordered={false}
      onChange={(e:any)=>{
        searchRef.currennt = e.target.value
      }}
      onPressEnter={()=>{
        alert('search')
      }}
    />
  </SearchBarView>
}
const TypeView = styled(FlexView)`
  height:${autoWidthVW(50)};
  width:${autoWidthVW(50)};
  cursor:pointer
`
const ChooseView = styled(FlexViewBetween)`
  cursor:pointer;
  border-top-right-radius:${autoWidthVW(25)};
  border-bottom-right-radius:${autoWidthVW(25)};
  flex:1
`
const LineV = styled.div`
  width:1px;
  height:${autoWidthVW(30)};
  background-color:${colors.main};
`
const SearchBarView = styled(FlexView)`
  width:${autoWidthVW(300)};
  height:${autoWidthVW(50)};
  border-radius:${autoWidthVW(25)};
  border:1px solid ${colors.main};
  padding:0 ${autoWidthVW(20)};
  box-sizing:border-box;
	-moz-box-sizing:border-box;
`
const Line = styled(animated.div)`
  height:2px;
  width:${autoWidthVW(60)};
  background-color:${colors.main};
  position:absolute;
  left:${autoWidthVW(left)};
  bottom:0
`
const ItemView = styled(FlexViewCenter)`
  height:${autoWidthVW(60)};
  margin-right:${autoWidthVW(40)};
  padding:0 ${autoWidthVW(10)};
  cursor:pointer;
  width:${autoWidthVW(60)};
`
const Logo = styled(FlexView)`
  width:${autoWidthVW(50)};
  height:${autoWidthVW(60)};
  cursor:pointer;
  margin-right:${autoWidthVW(100)};
`
const HeaderContent = styled(FlexViewBetween)`
  width:${autoWidthVW(page_width)};
  height:100%;
  z-index: 2;
`
const BlurView = styled(FlexView)<{
  alpha:number
}>`
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