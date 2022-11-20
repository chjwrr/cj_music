import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSpring,animated } from 'react-spring'
import styled from 'styled-components'
import ImageCommon from '../../public/images/ImageCommon'
import Layout from '../components/Layout'
import { GetServerSideProps } from 'next'

import {Song} from '../interface/song'
import SongList from '../interface/songList'


const Home:NextPage = (props:any) => {

  const abc:SongList[] = JSON.parse(JSON.stringify(props.songList))
  console.log('歌单数据=',abc)

  return (
    <Layout>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps<{ data: any }> = async (context) => {
  const songListRes = await fetch(`https://www.chjk.cf/personalized?limit=10`)
  const songListData = await songListRes.json()
  
  
  if (!songListData || songListData.code != 200) {
    return {
      notFound: true,
    }
    // return {
    //   redirect: {
    //     destination: '/',
    //     permanent: false,
    //   },
    // }
  }

  return { props: { 
    songList:songListData.result
   } }
}

export default Home
