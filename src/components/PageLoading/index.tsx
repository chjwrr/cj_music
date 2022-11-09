import Image from "next/image"
import styled from "styled-components"
import ImageCommon from "../../../public/images/ImageCommon"
import { autoWidthVW } from "../../common/Common"
import { FlexViewCenter } from "../Common"

function PageLoading(){
  return <Main>
    <ImageView src={ImageCommon.LOGO}/>
  </Main>
}

const ImageView = styled.img`
  width:190px;
  height:100px;
  animation:fadenum 2s infinite;
  @keyframes fadenum {
    100%{transform:rotate(360deg)}
  };
  margin:100px;
`
const Main = styled(FlexViewCenter)`
  width:100%;
  background-color: #000;
  height:10%
`
export default PageLoading