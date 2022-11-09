import styled from "styled-components";
import ImageCommon from "../../../public/images/ImageCommon";
import { FlexViewCenter } from "../Common";

export default function Loading(){
    return(
      <FlexViewCenter>
        <ImageView/>
      </FlexViewCenter>
    )
}
const ImageView = styled.div`
  width:40px;
  height:40px;
  animation:fadenum 2s infinite;
  @keyframes fadenum {
    100%{transform:rotate(360deg)}
  };
  background-position:center;
  background-image:url(${ImageCommon.loading_pending});
  background-size:cover;
  background-repeat: no-repeat;
`