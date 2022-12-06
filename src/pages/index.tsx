import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSpring,animated } from 'react-spring'
import styled from 'styled-components'
import ImageCommon from '../../public/images/ImageCommon'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'

import Song from '../interface/song'
import SongCollection from '../interface/songCollection'
import Singer from '../interface/singer'
import MV from '../interface/mv'
import Barrage from '../components/ Barrage'

const Home:NextPage = (props:any) => {
  const songCollectionList:SongCollection[] = JSON.parse(JSON.stringify(props.data.songCollectionList))
  console.log('歌单数据=',songCollectionList)
  const singerList:Singer[] = JSON.parse(JSON.stringify(props.data.singerList))
  console.log('歌手数据=',singerList)
  const mvList:MV[] = JSON.parse(JSON.stringify(props.data.mvList))
  console.log('MV数据=',mvList)

  return (
    <Layout>
      <Barrage/>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const songCollectionListRes = await fetch(`https://www.chjk.cf/personalized?limit=10`)
  const singerListRes = await fetch(`https://www.chjk.cf/top/artists?offset=0&limit=10`)
  const mvListRes = await fetch(`https://www.chjk.cf/mv/first?limit=10`)


  const songCollectionListData = await songCollectionListRes.json()
  const singerListData = await singerListRes.json()
  const mvListData = await mvListRes.json()

  // if (!songListData || songListData.code != 200) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      data:{
        songCollectionList:songCollectionListData?.result,
        singerList:singerListData?.artists,
        mvList:mvListData?.data
      }
    },
    revalidate: 24*60*60, // one day
  }
}

export default Home
