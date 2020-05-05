// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import { useObject } from '@vorlefan/react-hooks'

import { Typography } from '@material-ui/core'
import { stylesRoot } from './styles'
import { ShopBlockComponent } from '../../@common/shops'
import PopupComponent from './popup'

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

    const shopData = useObject({})

    function handleClick(shopData_API) {
        shopData.setState(shopData_API)
    }

    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.title}>
                Escolha uma empresa para divulgar
            </Typography>
            <div className={classes.col}>
                {PLACEHOLDER_LIST_SHOPS.map((shopData, key) => (
                    <ShopBlockComponent
                        key={key}
                        shopData={shopData}
                        onClick={handleClick}
                    />
                ))}
            </div>
            {shopData.isValid() && <PopupComponent shopData={shopData} />}
        </div>
    )
}
