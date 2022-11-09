import React, { createContext, ReactElement, useContext, useState } from "react";
import styled from "styled-components";
import { colors } from "../common/constants";

const ModalContext = createContext({
  show:(modalRender: ReactElement,style?:object)=>{},
  hidden:()=>{}
})
export function useModalContext(){
  return useContext(ModalContext)
}
export default function ModalProvider({children}:any){
  const [visible,setVisible] = useState(false)
  const [modalStyle,setModalStyle] = useState({})

  const [modalRender,setModalRender] = useState<ReactElement>()
  return <ModalContext.Provider value={{
    show:(modalRender:ReactElement,style?:object)=>{
      setVisible(true)
      setModalRender(modalRender)
      setModalStyle(style||{})
    },
    hidden:()=>{
      setVisible(false)
      setModalRender(<div/>)
    }
  }}>
    {children}
    <Modal style={modalStyle} visible={visible} modalRender={modalRender}/>
  </ModalContext.Provider>
}
function Modal({visible,modalRender,style}:any){
  if (!visible){
    return null
  }
  return <ModalView style={style} className="animate__animated animate__fadeIn animate__faster">
    {modalRender}
  </ModalView>
}
const ModalView = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color:${colors.black_7};
  z-index:98;
  display:flex;
  @media (max-width: 768px) {
    padding-left:0px;
    padding-top:0px;
  };
  justify-content:center;
  align-items:center
`