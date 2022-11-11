import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSpring,animated } from 'react-spring'
import styled from 'styled-components'
import ImageCommon from '../../public/images/ImageCommon'
import Layout from '../components/Layout'
import LineAnimal from '../components/LineAnimal'
import {
  useHomeBanner
} from '../hooks/useHttps'

const Home:NextPage = () => {
  const homeBanner = useHomeBanner()
  return (
    <Layout>
      <div>
        <iframe
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/5dcebcfaedbd4e7b8a27bd1ae55f1ac3/embed?autospin=1&autostart=1">
        </iframe>
      </div>
      {/* {
        homeBanner.isLoading ? <div style={{width:200,height:200,backgroundColor:'red'}}/> : 
        homeBanner.data?.banners.map((item:any)=>{
          return <Image key={item.imageUrl} width={100} height={100} alt='' src={item.imageUrl}/>
        })
      } */}
      <Image src={ImageCommon.icon_01} alt='' width={168} height={200} priority={true}/>
      <LineAnimal/>
    </Layout>
  )
}
export default Home
