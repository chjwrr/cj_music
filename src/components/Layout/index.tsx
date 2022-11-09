import React from 'react'
import Head from 'next/head'
import { isBrowser } from 'react-device-detect'
import { autoWidthVW } from '../../common/Common'
import { FlexViewColumn } from '../Common'
import { footer_height, header_height, page_width } from '../../common/constants'

const Layout = ({
  children,
  title = 'CJ Music',
  header = true,
  footer = false,
}: {
  children: React.ReactNode
  title?: string
  footer?: boolean
  header?: boolean
}) => (
  <FlexViewColumn
    style={{
      padding: isBrowser ? '0' : '0 15px',
      width: autoWidthVW(page_width),
      overflow: 'hidden',
      alignItems:'flex-start',
      // backgroundColor:'rgba(0,0,0,.1)'
      paddingTop:autoWidthVW(header_height+10),
      paddingBottom:autoWidthVW(footer_height+10),
    }}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key={'CJ Music'}
      />
    </Head>
    {children}
  </FlexViewColumn>
)

export default Layout
