import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import { LocalLanguage } from "../../../public/locales/LocalesCommon";
import {AppState} from "../index";

export interface SettingState {
  language:LocalLanguage,
}

const initialState:SettingState = {
  language:LocalLanguage.EN
}
export function useLanguage(): LocalLanguage {
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
