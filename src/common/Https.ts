import axios from 'axios'

axios.defaults.baseURL = 'https://music-api-chjwrr.vercel.app';
axios.defaults.timeout = 15000
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const homeBanner_url:string = '/banner'


function getUrlWithParams(pathName:string,params?:any){
  if (!params){
    return pathName
  }
  let url = pathName+'?'
  Object.keys(params).forEach((item:any)=>{
    url += `${item}=${params[item]}&`
  })
  return url.slice(0,-1)
}

/**
 * 请求接口
 * @param pathName 接口地址
 * @param params 接口参数
 */
export function get(pathName:string,params?:any){
  console.log('params==',getUrlWithParams(pathName,params));
  return new Promise((resolve:any, reject:any)=>{
    axios.get(getUrlWithParams(pathName,params)).then((res:any)=>{
      if (res.status == 200){
        resolve(res.data)
      }
    }).catch((e:any)=>{
      reject(e.toJSON())
    })
  })
}