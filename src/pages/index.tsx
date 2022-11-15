import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSpring,animated } from 'react-spring'
import styled from 'styled-components'
import ImageCommon from '../../public/images/ImageCommon'
import Layout from '../components/Layout'
import LineAnimal from '../components/LineAnimal'

import {Song} from '../interface/song'
const Home:NextPage = () => {

  return (
    <Layout>
      <div>
        <iframe
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/5dcebcfaedbd4e7b8a27bd1ae55f1ac3/embed?autospin=1&autostart=1">
        </iframe>
      </div>
    </Layout>
  )
}
export default Home
