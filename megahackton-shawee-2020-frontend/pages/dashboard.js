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

const DashboardDesktop = loadable(() =>
    import('../client/components/dashboard/desktop')
)
const DashboardMobile = loadable(() =>
    import('../client/components/dashboard/mobile')
)

const Footer = loadable(() => import('../client/components/@common/footer'))

/*
:--------------------------------------------------------------------------
: Desktop Orientation
:--------------------------------------------------------------------------
*/

const Desktop = ({}) => (
    <div>
        <MenuDesktop />
        <DashboardDesktop />
        <Footer />
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
        <DashboardMobile />
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
                <title>Bairro Amigo | Dashboard de Exemplo</title>
                <meta name="robots" content="index, follow" />
            </Head>
            {screenSize.orientation === 'landscape' ? <Desktop /> : <Mobile />}
        </div>
    )
}
