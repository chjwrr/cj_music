import { isMobile } from 'react-device-detect';

export function autoWidthVW(width:number){
  if(isMobile){
    return width/375*100+"vw"
  }
  return width/1440*100+"vw"
}

/**
 * 数字前面自动补0
 * @param str string/number
 * @param decimals 4
 * @returns string
 */
export function padString(str:string|undefined|number,decimals=4){
  if (!str){
    return ''
  }
  return String(str).padStart(decimals, '0')
}
