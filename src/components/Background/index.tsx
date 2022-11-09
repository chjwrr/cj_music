import styled from 'styled-components'
import { FlexView } from '../Common'
import ImageCommon from '../../../public/images/ImageCommon'
import ParticlesBg from 'particles-bg'
// "color"
// "ball"
// "lines"
// "thick"
// "circle"
// "cobweb"
// "polygon"
// "square"
// "tadpole"
// "fountain"
// "random"
// "custom"
function Background() {
  return <BackGroundView>
    <ParticlesBg num={100} type="lines" bg={true}/>
  </BackGroundView>
}
const BackGroundView = styled(FlexView)`
  position: fixed;
  bottom:0;
  top:0;
  left:0;
  right:0;
  width:100%;
  height:100%;
  z-index:1
`
export default Background
