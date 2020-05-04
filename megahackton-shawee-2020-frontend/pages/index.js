/*
:--------------------------------------------------------------------------
: /index
:--------------------------------------------------------------------------
*/

import React from 'react'
import Head from 'next/head'
import { useScreenSize } from '@vorlefan/react-hooks'
import loadable from '@loadable/component'

/*
:--------------------------------------------------------------------------
: Components
:--------------------------------------------------------------------------
*/

import { MenuMobile, MenuDesktop } from '../client/components/@common/menu'

const IndexDesktop = loadable(() =>
    import('../client/components/index/desktop')
)
const IndexMobile = loadable(() => import('../client/components/index/mobile'))

const Footer = loadable(() => import('../client/components/@common/footer'))

/*
:--------------------------------------------------------------------------
: Desktop Orientation
:--------------------------------------------------------------------------
*/

const Desktop = ({}) => (
    <div>
        <MenuDesktop />
        <IndexDesktop />
    </div>
)

/*
:--------------------------------------------------------------------------
: Mobile Orientation
:--------------------------------------------------------------------------
*/

const Mobile = ({}) => (
    <div>
        <MenuMobile />
        <IndexMobile />
    </div>
)

/*
:--------------------------------------------------------------------------
: Page Component
:--------------------------------------------------------------------------
*/

export default function Page({}) {
    const screenSize = useScreenSize({}, [0.95, 1.5])
    return (
        <div>
            <Head>
                <title>BTEX</title>
                <meta name="robots" content="index, follow" />
            </Head>
            {screenSize.orientation === 'landscape' ? <Desktop /> : <Mobile />}
            <Footer />
        </div>
    )
}
