import LocalesCommon,{LocalLanguage} from "../../public/locales/LocalesCommon";
import { useLanguage } from "../state/setting";

export default function useTranslationLanguage(){
  const language = useLanguage()
  const languageJson:any = LocalesCommon[language as LocalLanguage]
  function t(key:string){
    return languageJson[key]
  }
  return {
    t,
    language
  }
}