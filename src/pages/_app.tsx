import '../styles/globals.css'
import 'antd/dist/antd.css'
import 'animate.css'
import type { AppProps } from 'next/app'
import styled from 'styled-components'
import { Suspense, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import Loading from '../components/Loading'
import store from '../state'
import LoadingProvider from '../provider/loadingProvider'
import ModalProvider from '../provider/modalProvider'
import { ReactQueryProvider } from '../lib/react-query'
import { isBrowser } from 'react-device-detect'
import dynamic from 'next/dynamic'
import { FlexViewColumn } from '../components/Common'
import PageLoading from '../components/PageLoading'

const BackgroundDynamic = dynamic(() => import('../components/Background'), {
  ssr: false,
})
const HeaderDynamic = dynamic(() => import('../components/Header'), {
  ssr: false,
})
const FooterDynamic = dynamic(() => import('../components/Footer'), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {

  const [load,setLoad] = useState(false)
  useEffect(()=>{
    setLoad(true)
  },[])
  if (!load){
    return <PageLoading/>
  }

  return (
    <Suspense fallback={<Loading></Loading>}>
      <ReactQueryProvider>
        <Provider store={store}>
          <LoadingProvider>
            <ModalProvider>
              <BackgroundDynamic/>
              <MainView>
                <HeaderDynamic/>
                <Component {...pageProps} />
                <FooterDynamic/>
              </MainView>
            </ModalProvider>
          </LoadingProvider>
        </Provider>
      </ReactQueryProvider>
    </Suspense>
  )
}

const MainView = styled(FlexViewColumn)`
  width: 100%;
  z-index: 10;
`
export default MyApp
