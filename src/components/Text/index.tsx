import styled from 'styled-components'
import {autoWidthVW} from '../../common/Common'


export const Text = styled.span<{
  color?:string,
  size?:number,
  webSize?:number,
  weight?:string
}>`
  color:${({color})=>color??'white'};
  font-size:${({webSize})=>autoWidthVW(webSize??16)};
  font-weight:${({weight})=>weight??'400'};
  @media (max-width: 768px) {
    font-size:${({size})=>autoWidthVW(size??12)};
  };
  white-Space:break-spaces;
  font-family: 'BOOKOSI';
`

export const TextBold = styled(Text)`
  font-weight:800
`
export const TextSemiBold = styled(Text)`
  font-weight:600
`
export const TextRegular = styled(Text)`
  font-weight:lighter
`

