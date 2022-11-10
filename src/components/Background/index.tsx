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
    <ParticlesBg num={100} type="lines"/>
  </BackGroundView>
}
const BackGroundView = styled(FlexView)`
  position: fixed;
  bottom:0;
  top:0;
  left:0;
  right:0;
  z-index:1;
  background-color: black;
  background-position:center;
  /* background-image:url(${ImageCommon.icon_01}); */
  background-size:cover;
  background-repeat: no-repeat;
  width:auto;
  height:100%;
  /* filter:blur(2px); */
`
export default Background
