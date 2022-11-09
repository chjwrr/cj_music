import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {AppState} from "../index";

// EN=0,
// CN=1
export interface SettingState {
  language:number,
}

const initialState:SettingState = {
  language:1
}
export function useLanguage(): number {
    return useSelector((state: AppState) => state.setting.language)
}
export const settingSlice = createSlice({
    name:"setting",
    initialState,
    reducers:{
      changeLangugae:(state,action:PayloadAction<SettingState>)=>{
          state.language = action.payload.language
      }
    }
})
export const {changeLangugae} = settingSlice.actions

export default settingSlice.reducer
