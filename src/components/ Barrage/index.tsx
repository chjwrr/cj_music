import styled from "styled-components"
import { autoWidthVW } from "../../common/Common"
import { FlexView } from "../Common"

export default function Barrage(){



  return <Content>
    <canvas id={'canvas'} style={{width:'100%',height:'100%',backgroundColor:'red'}}/>
  </Content>
}
const Content = styled(FlexView)`
  width:100%;
  height:${autoWidthVW(400)};
`

// https://github.com/hugeorange/BulletJs
// https://github.com/zerosoul/rc-bullets
// https://github.com/imtaotao/danmuku
// https://github.com/weizhenye/Danmaku