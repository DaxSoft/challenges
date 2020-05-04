// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import { useToggle } from '@vorlefan/react-hooks'

import { stylesRoot } from './styles'
import WhoAimComponent from './whoaim'
import ClientComponent from './client'
import MerchantComponent from './merchant'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    const toggleJoin = useToggle({
        client: false,
        merchant: false,
    })

    return (
        <div className={classes.root}>
            {toggleJoin.isAll(false) && (
                <WhoAimComponent toggleJoin={toggleJoin} />
            )}
            {toggleJoin.$client.isOn() && (
                <ClientComponent toggleJoin={toggleJoin} />
            )}
            {toggleJoin.$merchant.isOn() && (
                <MerchantComponent toggleJoin={toggleJoin} />
            )}
        </div>
    )
}
