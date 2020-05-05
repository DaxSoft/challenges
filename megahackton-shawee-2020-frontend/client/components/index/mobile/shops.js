// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useFetch } from '@vorlefan/react-hooks'

import { stylesRoot } from './styles/shops'
import { Typography, CircularProgress } from '@material-ui/core'
import { ShopBlockComponent } from '../../@common/shops'
import Scrollable from 'react-indiana-drag-scroll'

// ------------------------------------------------------------------
// | [handlers]
// ------------------------------------------------------------------

const PLACEHOLDER_LIST_SHOPS = [
    {
        logo: '/shops/logo/cafedomercado.png',
        name: 'Café do Mercado',
        cashback: 0.07,
    },
    {
        logo: '/shops/logo/mercado_municipal.png',
        name: 'Mercado Municipal',
        cashback: 0.03,
    },
    {
        logo: '/shops/logo/mmcomercio.png',
        name: 'MM Comércio',
        cashback: 0.04,
    },
]

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    const listShop = useFetch(
        {
            endpoint: 'https://cf46abee.ngrok.io/',
            start: false,
            stateInit: PLACEHOLDER_LIST_SHOPS,
        },
        'GET',
        fetch
    )

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Ganhe uma renda extra recomendando as lojas para seus amigos
            </Typography>
            {listShop.loading.isOn() ? (
                <CircularProgress color="#0984e3" />
            ) : (
                <Scrollable horizontal={true} className={classes.col}>
                    {Array.isArray(listShop.data) &&
                        listShop.data.length > 0 &&
                        listShop.data.map((shopData, key) => (
                            <ShopBlockComponent key={key} shopData={shopData} />
                        ))}
                </Scrollable>
            )}
        </div>
    )
}
