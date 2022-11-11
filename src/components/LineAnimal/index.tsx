import { useEffect, useState } from "react";
import { useSpring,animated } from "react-spring";
import styled from "styled-components";
import { autoWidthVW } from "../../common/Common";
import { ColumnFixedView, RowFixedView } from "../View";

const colors = [
  '#FF3399',
  '#009900',
  '#FF99FF',
  '#3300CC',
  '#990033',
  '#FFFF33',
  '#CC33FF',
  '#00CCFF',
  '#FF00FF',
  '#660099',
  '#666600',
  '#FFCC00',
]
export default function LineAnimal(){
  return <RowFixedView>
    {
      colors.map((item:string,index:number)=>{
        return <AnimalLine key={index} line={10} color={item}/>
      })
    }
  </RowFixedView>
}
function getRandom(line:number){
  return parseInt(Math.random()*(line - 1)+'') + 1
}
function AnimalLine({line,color}:{line:number,color:string}){
  const array = new Array(line).fill('');
  const [random,setRandow] = useState(1)
  useEffect(()=>{
    setInterval(() => {
      setRandow(getRandom(line))
    }, 150);
  },[])
  return <ColumnFixedView>
    {
      array.map((item:any,index:number)=>{
        const style = useSpring({
          from:{opacity:1},
          to:{opacity:0.1+((1 - 0.1) / random) * index},
          config: {
            duration: 150,
          },
        })
        return <Line color={color} style={index < random ? style : {}} key={index}/>
      })
    }
  </ColumnFixedView>
}
const Line = styled(animated.div)<{
  color:string
}>`
  width: ${autoWidthVW(20)};
  height: ${autoWidthVW(4)};
  border-radius: ${autoWidthVW(2)};
  background-color: ${({color})=>color};
  margin: ${autoWidthVW(2)};
`