import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`
const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`

export const RowFixedView = styled(FlexRow)`
  align-items: center;
`
export const RowView = styled(FlexRow)`
  align-items: center;
  width: 100%;
`
export const RowBetweenView = styled(RowView)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const RowEndView = styled(RowView)`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

export const ColumnFixedView = styled(FlexColumn)`
`
export const ColumnFixedCenterView = styled(FlexColumn)`
  align-items: center;
`
export const ColumnView = styled(FlexColumn)`
  width: 100%;
`
export const ColumnCenterView = styled(FlexColumn)`
  width: 100%;
  align-items: center;
`

// background: linear-gradient(to right, #7AE1B3 0%, #0A8A34 100%);
// background:-webkit-linear-gradient(right,transparent,#FFFFE4,transparent);
// background-image: linear-gradient(to bottom right, red, yellow);

// shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。
// background-image: radial-gradient(shape size at position, start-color, ..., last-color);
