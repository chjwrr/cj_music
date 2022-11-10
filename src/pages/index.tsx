import type { NextPage } from 'next'
import Image from 'next/image'
import ImageCommon from '../../public/images/ImageCommon'
import Layout from '../components/Layout'
import {
  useHomeBanner
} from '../hooks/useHttps'

const Home:NextPage = () => {
  const homeBanner = useHomeBanner()
  return (
    <Layout>
      {
        homeBanner.isLoading ? <div style={{width:200,height:200,backgroundColor:'red'}}/> : 
        homeBanner.data?.banners.map((item:any)=>{
          return <Image key={item.imageUrl} width={100} height={100} alt='' src={item.imageUrl}/>
        })
      }
      <Image src={ImageCommon.icon_01} alt='' width={168} height={200} priority={true}/>
      {/* <div style={{width:200,height:200,backgroundColor:'red'}}/>
      <div style={{width:200,height:200,backgroundColor:'blue'}}/>
      <div style={{width:200,height:200,backgroundColor:'yellow'}}/>
      <div style={{width:200,height:200,backgroundColor:'purple'}}/>
      <div style={{width:200,height:200,backgroundColor:'green'}}/>
      <div style={{width:200,height:200,backgroundColor:'black'}}/>
      <div style={{width:200,height:200,backgroundColor:'white'}}/> */}

    </Layout>
  )
}
export default Home
