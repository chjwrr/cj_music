import styled from "styled-components";
import { autoWidthVW } from "../common/Common";
import { colors } from "../common/constants";
import React, {createContext, useContext, useState} from "react";
import ImageCommon from "../../public/images/ImageCommon";
import {animated, useSpring } from "react-spring";
import {FlexView, FlexViewBetween} from "../components/Common";
import Image from "next/image";
import { isBrowser } from "react-device-detect"

export enum LoadingType {
  confirm=0,
  pending=1,
  error=2,
  success=3
}

export const LoadingContext = createContext({
  show: (type:LoadingType,message:string) => {

  },
  hide:()=>{}
})
export function useLoadingContext() {
  const loadingContext = useContext(LoadingContext)
  return loadingContext
}
export default function LoadingProvider({children}:any) {

  const [visible,setVisible] = useState(false)
  const [type,setType] = useState(LoadingType.confirm)
  const [message,setMessage] = useState("")
  return(
      <LoadingContext.Provider
          value={{
              show:(type:LoadingType,message:string) => {
                  setType(type)
                  setMessage(message)
                  setVisible(true)
              },
              hide:()=>{
                  setVisible(false)
              }
          }}
      >
          {children}
          <Loading
              visible={visible}
              type={type}
              message={message}
              onClose={()=>setVisible(false)}
          ></Loading>
      </LoadingContext.Provider>
  )
}

function Loading({visible,type,message,onClose}:any) {
  if(!visible){
      return null;
  }
  return(
    <ModalView className="animate__animated animate__fadeIn animate__faster">
      <LoadingContent className="animate__animated animate__slideInUp animate__faster">
      </LoadingContent>
    </ModalView>
  )
}
const LoadingContent = styled.div`
  width:${autoWidthVW(959)};
  padding:${autoWidthVW(40)} ${autoWidthVW(30)};
  position:relative;
  background-color: #fff;
  border-radius: ${autoWidthVW(20)};
  @media (max-width: 768px) {
    width:${autoWidthVW(350)};
    padding:${autoWidthVW(20)} ${autoWidthVW(15)};
    border-radius: ${autoWidthVW(10)};
  };
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`
const ModalView = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color:${colors.black_7};
  z-index:99;
  display:flex;
  align-items:center;
  justify-content:center;
`
