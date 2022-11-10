import { useQuery } from "react-query"
import { config } from "../common/constants"
import {
  get,
  homeBanner_url
} from '../common/Https'

export function useHomeBanner(){
  async function fetchData(){
    const result:any = await get(homeBanner_url)
    console.log('useHomeBanner===',result);
    return {
      ...result
    }
  }
  return useQuery(["useHomeBanner"],fetchData,{
      refetchInterval: config.refreshInterval,
  })
}