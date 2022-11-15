import enJson from './en/common.json'
import cnJson from './cn/common.json'

export enum LocalLanguage {
  EN='en',
  CN='cn'
}
const LocalesCommon = {
  [LocalLanguage.EN]:enJson,
  [LocalLanguage.CN]:cnJson
}
export default LocalesCommon